import {Todo} from './todo';
/*
describe içinde test ismini verdik, it içinde new anahtar kelimesi ile
instance yaratıp expect’ in toBeTruthy metoduna gönderdik.
Ve varlık kontrolü yaptık. Bu en basit test, yani class’ tan
instance elde edilebiliyor mu ??
*/
describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });


/*
todo class’ ının constructor’ ına değerler gönderip todo adına bir instance elde ettik
ve ardından bu instance’ ın title ve complete değerlerinin, constructor’ da verdiklerimiz ile
aynı olup olmadığını expect’ in toEqual metod vasıtası ile test ediyoruz.

*/
  it('should accept values in the constructor', () => {
    let todo = new Todo({
      title: 'hello',
      complete : true
    });
    expect(todo.title).toEqual('hello');
    expect(todo.complete).toEqual(true);
  });
});
