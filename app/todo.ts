export class Todo {
  id : number;
  title : string = '';
  complete : boolean = false;

  constructor(values: Object = {} ) {
    Object.assign(this, values);
  }
}
/*
Klasik property tanımlamalarımızı yaptık.
“Typescript” yazdığımız için property’ lerin tiplerini VEREBİLDİK!!! constructor yani,
class’ tan instance elde ederken, de aldığımız değerleri set ettik.
*/
