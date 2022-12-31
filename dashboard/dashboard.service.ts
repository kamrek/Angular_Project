import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {getHttpHeaders} from '@app/common/constants/constants';
import {resourceServerUrl} from '@app/common/constants/server-settings';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(private http: HttpClient) {
    }

    getActiveUserList(currentOffice: string, offset: number = 0, limit: number = 10): Observable<HttpResponse<any>> {
        const url: string = `${resourceServerUrl}/v1/dashboard/active-list`;
        return this.http.get(url, {
            params: new HttpParams()
                .set('currentOffice', currentOffice ? currentOffice.toString() : '')
                .set('offset', offset ? offset.toString() : '')
                .set('limit', limit ? limit.toString() : ''),
            headers: getHttpHeaders(), observe: 'response'
        });
    }
    getPieChartCount(currentOffice: string, offset: number = 0, limit: number = 10): Observable<HttpResponse<any>> {
        const url: string = `${resourceServerUrl}/v1/dashboard/pie-count-list`;
        return this.http.get(url, {
            params: new HttpParams()
                .set('currentOffice', currentOffice ? currentOffice.toString() : '')
                .set('offset', offset ? offset.toString() : '')
                .set('limit', limit ? limit.toString() : ''),
            headers: getHttpHeaders(), observe: 'response'
        });
    }
    getBarChartCount(currentOffice: string, startDate: Date, endDate: Date ): Observable<HttpResponse<any>> {
        const url: string = `${resourceServerUrl}/v1/dashboard/bar-chart-list`;
        return this.http.get(url, {
            params: new HttpParams()
                .set('currentOffice', currentOffice ? currentOffice.toString() : '')
                .set('startDate', this.dateFormat(startDate))
                .set('endDate', this.dateFormat(endDate)),
            headers: getHttpHeaders(), observe: 'response'
        });
    }
    getLineChartCount(currentOffice: string): Observable<HttpResponse<any>> {
        const url: string = `${resourceServerUrl}/v1/dashboard/line-chart-list`;
        return this.http.get(url, {
            params: new HttpParams()
                .set('currentOffice', currentOffice ? currentOffice.toString() : ''),
            headers: getHttpHeaders(), observe: 'response'
        });
    }

    getDeactiveUserList(currentOffice: string, offset: number = 0, limit: number = 10): Observable<HttpResponse<any>> {
        const url: string = `${resourceServerUrl}/v1/dashboard/deactive-list`;
        return this.http.get(url, {
            params: new HttpParams()
                .set('currentOffice', currentOffice ? currentOffice.toString() : '')
                .set('offset', offset ? offset.toString() : '')
                .set('limit', limit ? limit.toString() : ''),
            headers: getHttpHeaders(), observe: 'response'
        });
    }

    getPendingUserList(currentOffice: string, offset: number = 0, limit: number = 10): Observable<HttpResponse<any>> {
        const url: string = `${resourceServerUrl}/v1/dashboard/pending-list`;
        return this.http.get(url, {
            params: new HttpParams()
                .set('currentOffice', currentOffice ? currentOffice.toString() : '')
                .set('offset', offset ? offset.toString() : '')
                .set('limit', limit ? limit.toString() : ''),
            headers: getHttpHeaders(), observe: 'response'
        });
    }

    dateFormat(str){
        var date = new Date(str),
         mnth = ("0" + (date.getMonth() + 1)).slice(-2),
         day = ("0" + date.getDate()).slice(-2);
         return [date.getFullYear(), mnth, day].join("-");
     }

}
