

        let div = document.querySelector("div");
        let button = document.querySelector("button");
        button.addEventListener("click",selectFunction);

        function selectFunction(){
            let Name = document.querySelector("input[type ='text']");
            let Email = document.querySelector("input[type='email']");

            let get_name = Name.value;
            let get_email = Email.value;

            div.innerText = `text:- ${get_name}
            email :- ${get_email}`



            // (why we write this)
            // get_name = ""
            // get_email = ""
        }
