import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GatewaysService {

  constructor(private http: HttpClient) {
  }

  postGateway(data: any): Observable<any> {
    return this.http.post(environment.Api + "/gateways", data)
  }
  postDevice(id: string, data: any): Observable<any> {
    return this.http.post(environment.Api + "/gateways/" + id, data)
  }
  getGateway(): Observable<any> {
    return this.http.get(environment.Api + "/gateways")
  }
  editGateway(id: string, date: any): Observable<any> {
    return this.http.put(environment.Api + "/gateways/" + id, date)
  }
  deleteGateway(id: string | undefined): Observable<any> {
    return this.http.delete(environment.Api + "/gateways/" + id)
  }
  deleteDeviceGateway(id: string, deviceId: string): Observable<any> {
    return this.http.post(environment.Api + "/gateways/delete-device/" + id + '/' + deviceId, {})
  }





}
