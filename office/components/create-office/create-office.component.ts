import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {OfficeService} from '../../services/office.service';
import {Office} from '@app/auth/office/model/office';

@Component({
    selector: 'app-create-office',
    templateUrl: './create-office.component.html',
    styleUrls: ['./create-office.component.css']
})
export class CreateOfficeComponent implements OnInit {

    public isLoading: boolean = false;
    officeGroup: FormGroup;
    statusList: any[];
    officeList: Office[];

    constructor(private fb: FormBuilder, private officeService: OfficeService,
                private router: Router, private messageService: MessageService) {
        this.statusList = [
            {name: 'Active', oid: 'Active'},
            {name: 'Inactive', oid: 'Inactive'}
        ];
    }

    ngOnInit(): void {
        this.officeGroup = this.fb.group({
            code: ['', [Validators.required]],
            name: ['', [Validators.required]],
            address1: ['', [Validators.required]],
            address2: [''],
            status: ['', [Validators.required]]
        })
    }

    onCancel() {
        this.router.navigate(['offices']);
    }

    onSubmit() {
        this.isLoading = true;
        if (this.officeGroup.valid) {
            this.officeService.saveOffice(this.officeGroup.value).subscribe(res => {
                    if (res.status === 200) {
                        this.messageService.add({severity: 'success', summary: 'Office saved Successfully', detail: ''});
                        setTimeout(() => {
                            this.router.navigate(['offices'])
                        }, 2000);
                    }
                },
                err => {
                    this.isLoading = false;
                    if (err.error && err.error.message) {
                        this.messageService.add({severity: 'error', summary: err.error.message, detail: ''});
                    }
                },
                () => {
                    this.isLoading = false;
                });
        } else {
            this.isLoading = false;
            this.messageService.add({severity: 'error', summary: 'Please fill up all the required fields', detail: ''});
        }
    }
}
