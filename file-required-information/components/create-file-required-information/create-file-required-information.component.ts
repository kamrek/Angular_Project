import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-file-required-information",
  templateUrl: "./create-file-required-information.component.html",
  styleUrls: ["./create-file-required-information.component.css"],
})
export class CreateFileRequiredInformationComponent implements OnInit {
  public isLoading: boolean = false;
  minDate: Date;
  maxDate: Date;

  constructor() {
    const today = new Date();
    this.minDate = new Date("January 01, 2000");
    this.maxDate = new Date(today);
  }

  ngOnInit(): void {}
}
