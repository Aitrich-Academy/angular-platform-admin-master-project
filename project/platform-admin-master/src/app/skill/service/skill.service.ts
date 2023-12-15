import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http:HttpClient) { }

  private getSkillsUrl=environment.baseurl+'/api/v1/skills';
 private addSkillUrl = environment.baseurl+'/api/v1/skillAdd';
private deleteSkillUrl=environment.baseurl+'/api/v1/skillRemove/';

 addSkill(skill: Skill): Observable<Skill> {
  return this.http.post<Skill>(this.addSkillUrl, skill);
}

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.getSkillsUrl);
  }
  deleteSkill(skillId: string): Observable<void> {
   
    return this.http.delete<void>(this.deleteSkillUrl+`${skillId}`);
  }
}

