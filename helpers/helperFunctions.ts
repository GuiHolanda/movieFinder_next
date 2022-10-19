import { IMovie } from './httpService';

export function instaceOfIMovie(obj: any): obj is IMovie {
  return 'Genre' in obj && 'Title' in obj && 'Response' in obj;
}
