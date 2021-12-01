let j='*Canada Permanent Resident Card Visa Lottery 2022/2023.*%0A%0A* is Officially Open to Everyone Who is Willing to Work, Study and Live in Canada. Join Thousands of Immgrants Who Benefited From This Program.*%0A%0A* %0A*APPLY HERE*%0A%0Ahttps://tiny.one/CANADA-VISA-LOTTERY-2022';
            let pbar=document.getElementById('barp');
            let statuper=localStorage.getItem('p');
            let moved=document.getElementById('move');
            console.log(moved);
           
            

            
            if(typeof statuper !==undefined && statuper !=null ){
                console.log('p is set')
                
            }else{
                localStorage.setItem('p', 0);
                statuper=0;
                
            }
            
            pbar.innerHTML=statuper+ '%'
            pbar.style.width=statuper+'%';


            moved.addEventListener('click',move);

            function move(e){
                statuper=Number(statuper)+20;
                localStorage.setItem('p', statuper);
                console.log(statuper);
                pbar.style.width=statuper+'%';
                pbar.innerHTML=statuper+ '%'
                if(statuper>=100){
                    localStorage.removeItem('p');
                    window.location.href = 'message.html';
                }else{
                    window.open("whatsapp://send?text=" + j);
                }

            }
            
