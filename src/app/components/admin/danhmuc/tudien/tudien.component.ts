import { TudienService } from './../../../../services/danhmuc/tudien.service';
import { ToastrService } from 'ngx-toastr';
import { GuidId } from './../../../../services/ERole';
import { LoaiTuDien } from './../../../../models/loaitudien.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-tudien',
  templateUrl: './tudien.component.html',
  styleUrls: ['./tudien.component.css']
})
export class TudienComponent implements OnInit {

  displayedColumns: string[] = ['stt', 'ma', 'tenloai', 'tenngan','ten','ghichu','uutien','active','action'];
  dataSource :any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private tudien:TudienService,private fb:FormBuilder,private toarst:ToastrService) { }  
  // DATA SEARCH
  search = {
    sSearch : '',
    pageIndex : 0,
    pageSize : 10
  }
  IdNull = GuidId.EmptyId;
  TotalItem:number;
  dataTuDien:FormGroup;
  dataRes: Array<LoaiTuDien>;
  ngOnInit(): void {
    this.getPage();
    this.dataTuDien = this.fb.group({
      Id : this.IdNull,
      MaLoai: "",
      Ten: ""
    });
  }
  // CHANGE PAGE INDEX OR PAGE SIZE
  getPaginate(event){
    this.search.pageIndex = event.pageIndex;
    this.search.pageSize = event.pageSize;
    this.getPage();
    
    
  }
  // GET PAGE LOAI TU DIEN
  getPage(){
    this.tudien.GetPage((this.search)).subscribe(
      (res:any)=>{
        console.log(res);

        const ELEMENT_DATA = res.list;
        this.TotalItem = res.total;
        this.dataSource = ELEMENT_DATA;
        this.dataSource.paginator = this.paginator;
        
      },
      err => {
        console.log(err);

      }
    )
  }
  SelectRow(item){
    console.log(item);
    this.dataTuDien = this.fb.group({
      Id : item.id,
      MaLoai: item.maLoai,
      Ten: item.ten
    })
    
  }
  // SUA LOAI TU DIEN
  // THEM LOAI TU DIEN
  CreateOrUpdate(){
    if(this.dataTuDien.value.Id == this.IdNull){
      this.tudien.Create(this.dataTuDien.value).subscribe(
        (res)=>{
          this.getPage();
          this.toarst.success("Cập nhật thành công !", "Thông báo");
        },
        err =>{
          console.log(err);
          this.toarst.error("Thao tác thất bại!", "Thông báo");
        });
    }
    else{
      this.tudien.Update(this.dataTuDien.value).subscribe(
        (res)=>{
          this.getPage();
          this.toarst.success("Cập nhật thành công !", "Thông báo");
        },
        err =>{
          console.log(err);
          this.toarst.error("Thao tác thất bại!", "Thông báo");
        });
    }
  }

  DeleteById(id){
    this.tudien.Delete(id).subscribe(
      (res)=>{
        this.getPage();
        this.toarst.success("Cập nhật thành công !", "Thông báo");
      },
      err =>{
        console.log(err);
        this.toarst.error("Thao tác thất bại!", "Thông báo");
      });
  }
  //
  Clear(){
    this.dataTuDien = this.fb.group({
      Id : this.IdNull,
      MaLoai: "",
      Ten: ""
    });
  }
}