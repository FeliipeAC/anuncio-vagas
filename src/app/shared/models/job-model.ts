import { IdNameModel } from './id-name-model';
export interface JobModel {
  name: string;
  description: string;
  location: string;
  category: IdNameModel;
  companies: IdNameModel;
  type: IdNameModel;
  mode: IdNameModel;
  salary: IdNameModel;
  technologies: IdNameModel[];
  id: number;
  created: number;
}
