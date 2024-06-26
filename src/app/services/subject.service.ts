import { Injectable, inject } from '@angular/core';
import { SubjectModel } from '../models/subject.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { SubjectDetailsListModel } from '../models/subject-details-list-model';
import { SubjectPostModel } from '../models/subject.post.model';
import { AuthService } from '../services/auth-.service';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  authService = inject(AuthService);
  http = inject(HttpClient);
  getIdUrl = 'https://localhost:7068/api/Subjects/GetById/';
  getDetailUrl = 'https://localhost:7068/api/Subjects/GetListDetail?PageIndex=0&PageSize=10';
  getSubject ="https://localhost:7068/api/Subjects?PageIndex=0&PageSize=100";
  getListFromAuthUrl ="https://localhost:7068/api/Subjects/GetListFromAuth";
  getListFromSubjectWithCategoryIdUrl = "https://localhost:7068/api/Subjects/GetListByCategoryId/2?PageIndex=0&PageSize=10";
  postSubjectUrl = 'https://localhost:7068/api/Subjects';
  postWithImageUrl = "https://localhost:7068/api/Subjects/AddSubjectWithImage";

  //!Get
  getSubjects(): Observable<SubjectDetailsListModel[]> {
    return this.http.get<any>(this.getDetailUrl).pipe(
      map((data) => data.items as SubjectDetailsListModel[]) // items'i doğrudan SubjectDetailsListModel[] tipine dönüştürür
    );
  }

  //!GetById
  getSubjectById(id: SubjectModel): Observable<SubjectModel>{
    return this.http.get<SubjectModel>(`${this.getIdUrl}${id}`);
  }

  //!GetSubjectByCategoryId
  getListFromSubjectWithCategoryId(id: any): Observable<any>{
    return this.http.get<any[]>(`https://localhost:7068/api/Subjects/GetListByCategoryId/${id}?PageIndex=0&PageSize=10`);
  }



  //!GetListFromAuth
  GetListFromAuth():Observable<SubjectDetailsListModel[]>{
    return this.http.get<any>(this.getListFromAuthUrl).pipe(
      map((data) => data.items as SubjectDetailsListModel[]) 
    );
  }

  //!Post
  createSubjectForOuthor(subject: SubjectPostModel): Observable<SubjectPostModel> {
    return this.http.post<SubjectPostModel>(this.postSubjectUrl, subject);
  }


  uploadSubject(data:FormData):Observable<FormData>{
    return this.http.post<FormData>(this.postWithImageUrl,data);
  }
}
