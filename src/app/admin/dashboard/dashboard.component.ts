import { Component } from '@angular/core';
import { CoreService } from 'src/app/_service/core.service';
import { FormComponent } from '../form/form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  data: any = []
  constructor(private coreService: CoreService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.coreService.getData('loginActivity').subscribe(res => {
      this.data = res

    })
  }

  edit(editData: any) {

    const dialogRef = this.dialog.open(FormComponent, {
      data: { editData },
      width: '60%',
      panelClass: 'editForm'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadData()
      }
    });

  }

  deleteData(id: string) {
    let text = "Are you sure , Do you want to Delete?";
    if (confirm(text) == true) {
      this.coreService.deleteData('loginActivity/' + id).subscribe((res) => {
        this.snackBar.open('Data Deleted Successfully!', 'Success');
        this.loadData();
      },)
    }

  }
}
