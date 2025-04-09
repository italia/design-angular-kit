import{a as x,b as J,c as W,d as G}from"./chunk-FNEUKG6X.js";import{Z as R,ga as q,ha as z,wa as Q,xa as L}from"./chunk-MCPDQGAC.js";import"./chunk-XZP45KYQ.js";import{a as I,b as y,o as D}from"./chunk-53YMBHPH.js";import{Cb as p,D as S,Db as r,Eb as u,H as M,Ib as N,Kb as c,O as H,Q as k,S as F,Sb as B,Tb as P,Ua as $,Ub as V,Wb as a,Wc as O,Y as v,Za as d,_a as U,fa as m,ga as C,j as b,k as w,p as h,qa as A,qb as f,ra as j,v as T,w as E,z as _}from"./chunk-Y6EHUKAP.js";import"./chunk-JNJ3D7EP.js";var K=(()=>{let i=class i{constructor(e){this.httpClient=e,this.uploadedFileList=[{id:0,file:new File([],"nome-file-01.pdf")},{id:1,file:new File([],"nome-file-02-nome-file-lungo-per-ellissi.doc")},{id:2,file:new File([],"nome-file-03.png"),progress:43,removable:!0},{id:3,file:new File([],"nome-file-04.png"),error:!0,removable:!0}]}onUpdateFileList(e){let t=Array.from(e).map((n,l)=>({id:l+this.uploadedFileList.length,file:n,removable:!0}));this.uploadedFileList=[...this.uploadedFileList,...t]}onDeleteFileList(e){this.uploadedFileList=this.uploadedFileList.filter(t=>t.id!==e.id)}httpClientExample(){let e=this.uploadedFileList[0];e.progress=1,e.error=void 0,e.removable=!1,b(e.file.arrayBuffer()).pipe(k(t=>{let n=[...new Uint8Array(t)];return this.httpClient.post("url",n,{reportProgress:!0,observe:"events"})}),F(t=>{t.type===I.UploadProgress&&(e.progress=Math.round(t.loaded/(t.total||1)*100))}),H(t=>t.type!==I.Response),h(t=>t.body),F(()=>{e.progress=100}),_(t=>(e.progress=void 0,e.removable=!0,e.error=!0,e.tooltip=t.message,w(null))),M(()=>{!e.error&&e.progress&&e.progress<100&&(e.progress=void 0,e.removable=!0,e.error=!0,e.tooltip="Incomplete upload error")}))}};i.\u0275fac=function(t){return new(t||i)(U(y))},i.\u0275cmp=m({type:i,selectors:[["it-upload-file-list-example"]],decls:6,vars:1,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],[3,"uploadFiles","deleteItem","fileList"]],template:function(t,n){t&1&&(p(0,"h3"),a(1,"Upload con lista di file"),r(),p(2,"div",0)(3,"div",1)(4,"div",2)(5,"it-upload-file-list",3),c("uploadFiles",function(s){return n.onUpdateFileList(s)})("deleteItem",function(s){return n.onDeleteFileList(s)}),r()()()()),t&2&&(d(5),f("fileList",n.uploadedFileList))},dependencies:[L],encapsulation:2});let o=i;return o})();var X=(()=>{let i=class i{constructor(e){this.httpClient=e,this.uploadedImageList=[]}ngOnInit(){let e=["https://picsum.photos/40/40?image=1055","https://picsum.photos/80/40?image=1056","https://picsum.photos/40/40?image=1057","https://picsum.photos/120/200?image=1058"].map(t=>this.httpClient.get(t,{responseType:"blob"}));T(e).subscribe(t=>{this.uploadedImageList=t.map((n,l)=>{let s=l===1?"nome-file-2-nome-file-lungo-per-ellissi.jpg":`nome-file-${l+1}.jpg`;return{id:l,file:new File([n],s),removable:l>1,progress:l===2?45:void 0,error:l===3}})})}onUpdateImageList(e){let t=Array.from(e).map((n,l)=>({id:l+this.uploadedImageList.length,file:n,removable:!0}));this.uploadedImageList=[...this.uploadedImageList,...t]}onDeleteImageList(e){this.uploadedImageList=this.uploadedImageList.filter(t=>t.id!==e.id)}};i.\u0275fac=function(t){return new(t||i)(U(y))},i.\u0275cmp=m({type:i,selectors:[["it-upload-image-list-example"]],decls:6,vars:1,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],["images","true",3,"uploadFiles","deleteItem","fileList"]],template:function(t,n){t&1&&(p(0,"h3"),a(1,"Con anteprima delle immagini"),r(),p(2,"div",0)(3,"div",1)(4,"div",2)(5,"it-upload-file-list",3),c("uploadFiles",function(s){return n.onUpdateImageList(s)})("deleteItem",function(s){return n.onDeleteImageList(s)}),r()()()()),t&2&&(d(5),f("fileList",n.uploadedImageList))},dependencies:[L],encapsulation:2});let o=i;return o})();var re=["uploadDragDropComponent"],Y=(()=>{let i=class i{onDragUploadStart(){E(1e3).pipe(S(100),h(e=>(e+1)*10)).subscribe(e=>{this.uploadDragDropComponent.progress(e),e>=100&&setTimeout(()=>{this.uploadDragDropComponent.reset()},2e3)})}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=m({type:i,selectors:[["it-upload-drag-drop-example"]],viewQuery:function(t,n){if(t&1&&B(re,5),t&2){let l;P(l=V())&&(n.uploadDragDropComponent=l.first)}},decls:7,vars:0,consts:[["uploadDragDropComponent",""],[1,"bd-example"],[1,"row","my-2"],[1,"col"],[3,"fileStartUpload"]],template:function(t,n){if(t&1){let l=N();p(0,"h3"),a(1,"Upload Drag&drop"),r(),p(2,"div",1)(3,"div",2)(4,"div",3)(5,"it-upload-drag-drop",4,0),c("fileStartUpload",function(){return A(l),j(n.onDragUploadStart())}),r()()()()}},dependencies:[Q],encapsulation:2});let o=i;return o})();var Z=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=m({type:i,selectors:[["it-upload-examples"]],decls:6,vars:0,consts:[["html",`<h3>Upload con lista di file</h3>
<div class="bd-example">
  <div class="row my-2">
    <div class="col">
      <it-upload-file-list
        [fileList]="uploadedFileList"
        (uploadFiles)="onUpdateFileList($event)"
        (deleteItem)="onDeleteFileList($event)"></it-upload-file-list>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';
import { UploadFileListItem } from 'design-angular-kit/interfaces/form';
import { catchError, finalize, from, map, of, skipWhile, switchMap, tap } from 'rxjs';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'it-upload-file-list-example',
  templateUrl: './upload-file-list-example.component.html',
})
export class UploadFileListExampleComponent {
  uploadedFileList: Array<UploadFileListItem> = [
    {
      id: 0,
      file: new File([], 'nome-file-01.pdf'),
    },
    {
      id: 1,
      file: new File([], 'nome-file-02-nome-file-lungo-per-ellissi.doc'),
    },
    {
      id: 2,
      file: new File([], 'nome-file-03.png'),
      progress: 43,
      removable: true,
    },
    {
      id: 3,
      file: new File([], 'nome-file-04.png'),
      error: true,
      removable: true,
    },
  ];

  constructor(private readonly httpClient: HttpClient) {}

  onUpdateFileList(files: FileList): void {
    const newFiles: Array<UploadFileListItem> = Array.from(files).map((file, index) => ({
      id: index + this.uploadedFileList.length, // I set an id, useful when deleting
      file, // The uploaded file
      removable: true, // set new file as removable
    }));

    this.uploadedFileList = [...this.uploadedFileList, ...newFiles];
  }

  onDeleteFileList(item: UploadFileListItem): void {
    this.uploadedFileList = this.uploadedFileList.filter(i => i.id !== item.id);
  }

  /**
   * Example to upload file with HttpClient
   */
  httpClientExample(): void {
    const fileToUpload = this.uploadedFileList[0];
    fileToUpload.progress = 1;
    fileToUpload.error = undefined;
    fileToUpload.removable = false;

    from(fileToUpload.file.arrayBuffer()).pipe(
      // Converting the file to arrayBuffer
      switchMap(arrayBuffer => {
        const bytes = [...new Uint8Array(arrayBuffer)]; // Convert arrayBuffer to Array<number>

        // NOTE: File conversion depends on your server / API
        // If you want to transform the file to base64 you can use the helper function
        // import {FileUtils} from "design-angular-kit";
        // const base64 = FileUtils.fileToBase64(fileToUpload.file)

        return this.httpClient.post<any>('url', bytes, {
          reportProgress: true,
          observe: 'events',
        });
      }),
      tap(event => {
        // Update the progress request status
        if (event.type === HttpEventType.UploadProgress) {
          fileToUpload.progress = Math.round((event.loaded / (event.total || 1)) * 100);
        }
      }),
      skipWhile(event => event.type !== HttpEventType.Response), // skip while the request not is complete
      map(event => (event as HttpResponse<any>).body), // request is complete with body
      tap(() => {
        fileToUpload.progress = 100;
      }),
      catchError(error => {
        fileToUpload.progress = undefined;
        fileToUpload.removable = true;
        fileToUpload.error = true;
        fileToUpload.tooltip = error.message; // Show error message as tooltip
        return of(null); // File upload failed
      }),
      finalize(() => {
        if (!fileToUpload.error && fileToUpload.progress && fileToUpload.progress < 100) {
          // There are no errors but the file upload is not complete
          fileToUpload.progress = undefined;
          fileToUpload.removable = true;
          fileToUpload.error = true;
          fileToUpload.tooltip = 'Incomplete upload error'; // Show error message as tooltip
        }
      })
    );
  }
}`],["html",`<h3>Con anteprima delle immagini</h3>
<div class="bd-example">
  <div class="row my-2">
    <div class="col">
      <it-upload-file-list
        [fileList]="uploadedImageList"
        images="true"
        (uploadFiles)="onUpdateImageList($event)"
        (deleteItem)="onDeleteImageList($event)"></it-upload-file-list>
    </div>
  </div>
</div>`,"typescript",`import { Component, OnInit } from '@angular/core';
import { UploadFileListItem } from 'design-angular-kit/interfaces/form';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'it-upload-image-list-example',
  templateUrl: './upload-image-list-example.component.html',
})
export class UploadImageListExampleComponent implements OnInit {
  uploadedImageList: Array<UploadFileListItem> = [];

  constructor(private readonly httpClient: HttpClient) {}

  ngOnInit() {
    const images$ = [
      'https://picsum.photos/40/40?image=1055',
      'https://picsum.photos/80/40?image=1056',
      'https://picsum.photos/40/40?image=1057',
      'https://picsum.photos/120/200?image=1058',
    ].map(url => this.httpClient.get(url, { responseType: 'blob' }));

    forkJoin(images$).subscribe(blobImages => {
      this.uploadedImageList = blobImages.map((blob, index) => {
        const fileName = index === 1 ? 'nome-file-2-nome-file-lungo-per-ellissi.jpg' : \`nome-file-\${index + 1}.jpg\`;
        return {
          id: index,
          file: new File([blob], fileName),
          removable: index > 1,
          progress: index === 2 ? 45 : undefined,
          error: index === 3,
        };
      });
    });
  }

  onUpdateImageList(files: FileList): void {
    const newFiles: Array<UploadFileListItem> = Array.from(files).map((file, index) => ({
      id: index + this.uploadedImageList.length, // I set an id, useful when deleting
      file, // The uploaded file
      removable: true, // set new file as removable
    }));

    this.uploadedImageList = [...this.uploadedImageList, ...newFiles];
  }

  onDeleteImageList(item: UploadFileListItem): void {
    this.uploadedImageList = this.uploadedImageList.filter(i => i.id !== item.id);
  }
}`],["html",`<h3>Upload Drag&drop</h3>
<div class="bd-example">
  <div class="row my-2">
    <div class="col">
      <it-upload-drag-drop (fileStartUpload)="onDragUploadStart()" #uploadDragDropComponent></it-upload-drag-drop>
    </div>
  </div>
</div>`,"typescript",`import { Component, ViewChild } from '@angular/core';
import { interval, map, take } from 'rxjs';
import { ItUploadDragDropComponent } from 'design-angular-kit/components/form/upload-drag-drop/upload-drag-drop.component';

@Component({
  selector: 'it-upload-drag-drop-example',
  templateUrl: './upload-drag-drop-example.component.html',
})
export class UploadDragDropExampleComponent {
  @ViewChild('uploadDragDropComponent') uploadDragDropComponent!: ItUploadDragDropComponent;

  onDragUploadStart(): void {
    interval(1000)
      .pipe(
        // Simulate upload of single file
        take(100),
        map(x => (x + 1) * 10) // Start from 1, end 100
      )
      .subscribe(progress => {
        this.uploadDragDropComponent.progress(progress);
        if (progress >= 100) {
          setTimeout(() => {
            this.uploadDragDropComponent.reset();
          }, 2000);
        }
      });
  }
}`]],template:function(t,n){t&1&&u(0,"it-upload-file-list-example")(1,"it-source-display",0)(2,"it-upload-image-list-example")(3,"it-source-display",1)(4,"it-upload-drag-drop-example")(5,"it-source-display",2)},dependencies:[W,K,X,Y],encapsulation:2});let o=i;return o})();var ee=(()=>{let i=class i{constructor(){this.fileListComponent=x.components.find(e=>e.name==="ItUploadFileListComponent"),this.dragDropComponent=x.components.find(e=>e.name==="ItUploadDragDropComponent")}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=m({type:i,selectors:[["it-upload-index"]],decls:15,vars:3,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"mt-3"],["label","API",1,"mt-3"],[3,"component"]],template:function(t,n){t&1&&(p(0,"h1",0),a(1,"Upload"),r(),p(2,"p",1),a(3,"Elementi dei form dedicati al caricamento file."),r(),u(4,"div",2),p(5,"it-tab-container")(6,"it-tab-item",3),u(7,"it-upload-examples"),r(),p(8,"it-tab-item",4)(9,"h2"),a(10,"Upload con lista di file"),r(),u(11,"it-api-parameters",5),p(12,"h2"),a(13,"Upload Drag&drop"),r(),u(14,"it-api-parameters",5),r()()),t&2&&(d(4),f("innerHTML",n.fileListComponent.description,$),d(7),f("component",n.fileListComponent),d(3),f("component",n.dragDropComponent))},dependencies:[J,z,q,Z],encapsulation:2});let o=i;return o})();var se=[{path:"",component:ee}],te=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=C({type:i}),i.\u0275inj=v({imports:[D.forChild(se),D]});let o=i;return o})();var Ne=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=C({type:i}),i.\u0275inj=v({imports:[O,G,R,te]});let o=i;return o})();export{Ne as UploadModule};
