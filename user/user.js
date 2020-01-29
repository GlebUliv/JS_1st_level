


    let div = document.getElementById("user")

    class User {
        constructor(username, email, password, avatar, created){
            this.username = username;
            this.email = email;
            this.password = password;
            this.avatar = avatar;
            this.created = created;
        }

        period() {
            let d0 = new Date('January 21, 2020');
            let d1 = new Date();
            let dt = (d1.getTime() - d0.getTime()) /
                (1000 * 60 * 60 * 24);
            alert('Пользователь зарегистрирован ' +
                Math.round(dt) + 'дней(день) назад');
        }

        render(){
            div.innerHTML = `
                <div>
                <h2>${this.username} , ( ${this.email} )</h2>
                <img src="${this.avatar}" />
                <p>user has registered on -  ${this.created} </p>
                </div>
                `
            }
        }
        
        

let u1 = new User("John Johnson", "john@sobaca.com", "******", "", "21.01.2020");
let u2 = new User("Mad Madson", "mad@sobaca.com", "*******", "", "22.01.2020");
let u3 = new User("Dob Dobson", "dob@sobaca.com", "******", "", "23.01.2020");

u1.render();
// u2.render();
// u3.render();
u1.period()
