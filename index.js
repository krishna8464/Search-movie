let nm
let bag = []

function mov(){
    nm=document.querySelector("input").value
    getData(nm)
}
    
     url = "http://www.omdbapi.com/?i=tt3896198&apikey=836dda57&t=";
     

async function getData(){

    try{
        let res = await fetch(url+nm)
        
        
        let out = await res.json();
        
        bag = out
        desimovie(out)
    }catch (err) {
        alert(err)
    }
}
let conta = document.querySelector("#cont")
function desimovie(data){
    
    if(data.Title===undefined){
        let img = document.createElement("img")
        img.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQwAAAC8CAMAAAC672BgAAABI1BMVEUAAADj4+O7u7vn5+e+vr7h4eHGxsbq6uo1NTWgoKAxMTEXFxdtbW3Z2dmsrKxLS0uDg4MhISG7wsLBwb2ZmZmnp6BlZWVYX1+QkJAmJiZFRUW2trYvMzOhrKyPj4d8hoZocXF/f39saFOysKy5ubE5OTkSEhJSUlLPz88+Pj5XV1dxcXFFS0tKRzhcWEaKioqos7O7uKgsKiB1dW4VEABhVTsUGxuIk5NCOSGblYiZk3qGhn+ppI1PT0U5NS91f38TDgQAFhYuJhVQWV4pOj0UJCogHRUSFxBibnUAERoeLThsZVJWU1gPHiQ7U11zb2GTn6c1LRlgXFNJYmyGgGkeN0BGQSMeGwk4S1ZBPi3Ly79mdH2EmaBmYFyKg3ESKi5APjU/362IAAASDklEQVR4nO1dC3ubOBbFIMsB29gkhGCreTCOX+DW3bab7my2k3TbdPrY6WbanZ3OtDPT//8rVlcCIcBuUscGdsL5+tWxr3SRDtLV416Eoij+XJdgez1FwApsWeY6sUiZdmWR3u1LMsdNqAysWGQkVc59KVsnVZJhLBq1kiqdZizb8pIlGUsqv1S5VqIkur2lKF6tocloEEOkx1pSVLPjq7RT2SZxGVwtJTMFGyOcEtU9ka2VVoljgk0tBV2IhpO0yvieZSqnxgSjlMZ6R+m0tVoSDVdUqlFLy4SuSTqbpkY3y6lnsoka62mVWjvivpdR2TCjbEFaY60haqxmSjKJ7n8/WzlxO+fpkrQ7ipOpsIaWXqamRbUaZbNNpssuU9NErTIVrtVbUcmz2XBUKz1bElGrDPW1dtT3FlQOR9lIWiUlw89eRpTczMji+5EpgYajW+xls4mSoywZUfcaZksiGpubVSkaW+bua+2oe31V5SgZlppiT6uJCvcbqQzaJBIpdpr0uHcZ6dsP3VHcq5SsIdrhyMx0IVHhYbrGce9SvIxKUWGLZCoXtUNlqiWzsZZtoFo9AZGcdtV2QlZDsUVr2slsNXskZFOczNaWRiEvpZJsCVHPTKnsxtn8STLbRBqF5sny12JzrRhqSqVUuVasEmjRCKvAaEuCNPawAsqyZlJmSCIjKWp+QaWcbUtZLkuptORs1vJsKZXXqVxPrzUaeKpUYPC9ICTRsr6c8jZBR0jq77caI0LnaLFJv93w+cDSuTrlLUCrkRzRbzVCMrpXp7wFqMiQUJHBwKdxFRkUfTTBsLSqyKDNogb7PnZFBsBmCzXcq8hQoq2NdqciQ6nISKAiQ0JFhoSKDAmCjHA33bk6y58XgowebN5Lu963EYIMpT9pyK7B24iYDEXp9a5K/SeHTMatR0WGhIoMCWUhoxQ+Cp2vWo2rU24MhhN4c9ftekGnYEqm4GyNIwXyR0s3VRSCmG6xjs5WW9P0ou6IFRCE1BgIYbfYHis8rP28b8tQl5kI+SBlcN102o1GO9eliYOyXAAdejpAIXcYmK1Ncuww3UVMMDbM4dW5N4rcV62eaBbUchLTJGr8g9m/Ov8mkfd+hhNT4XrjqbHVcboECTbyKsZi5EzGluDCjltBrxXRgeY5lWMxciYjHEcQCRI/x+OLvyRjLsiXDD9qGGkbNYpY0hfm2zQMh82CcyVjZIdVbmVEVsgGLsKG2lqjgYc5k2FE9mKBLGw0yF0g2zBYIDHEDudKhsPvPlk49eatBpnNRcKNgi3hIUI4VzLmvL6L10R+yFT+/aQYv4mJvtATekts6+ZRDBmEm4XFSzIrpCprXDeNQslYXN0mH09QsFC6SRRKxuLqlqZl1PLZTAjJWMx8L5QWaDPG/KmmfEx4OHounmX28RfG3Y0i3h03IXac5HPVgI+ei/ctvHCekb9/T3IVuCi3Wd8ULe8nBlk+O90wivGbhDZSVRds8M3DtUkBwREFOZHCfoLMjMMmlKg5ddgECiIjahrITLWNVrS7k/8sozj3oh9VmshPs/fs6OdCXDl8odbOf1Hkiv1O3eF9ZdSRNkH1Ip6XmzMyUP6XtsQGH1JNU3dt0xRUsGG3CDYmmqbViuigiuROY55WNQFkFuB2tWxiFhPiJwzEYiBSpBPase2cWfHIAjqQcBcUsKMRoVtrNGo5bzx2dJykg3aWYGyKkSb/hWtYLjh/QKvl7eXs6GZkL+BD79Ih1Yhta0Ee+dDXmr8pnTpz21QxRKoEDp9d9GLbWoxnrcjY8VHTsqymNPlqxrMQN/9N8tI9liXNyQqYi5aMjDhiAen5R9+VjQzFi6dfuS0WenNTh/G8dGQorSh6ZcFCf0PAmsZCucpHhuJH06+8Jl98oYatMpKhjBkb+W1tiCV8GclQDDoZzdF/UvJn1IbmEufKRlByMhQrzylx2cnIFRUZEtKPchay51UWCDL6fAl/q5/Zi10FAQTS3+qGIftNxp53ux9rLc0zaqVARYaEigwJFRkSRFBsBUVpARl5RS+VHnaNB9JXAHQCJ5x23vojIySYGOtFOClKiBGC0Ed8dcLbgOrYXAnVfoaEigwJGyRjtGWcr0WRZRgrWfgRxVdl2CAZhxg/XIeeMxOp+i8rZDxy3dNrJh1u+Njcp0RFu/9cIeOzIHgnfT3DSEVkFUWPEdq9VkIftycQs77BlnEfrRYVTxCWbujzfVUl84NVFF2XjGEOx+bO3IOVTsS4ryKJjGfbKnqinK+i6Lpk2NEBRNcno+n7/osT33H8F7SijuM8CQWzPcfZg/CBUcf3+Q7iBaSddTqf2bcpZPosqZpCujv0170X/IfRmOrzv4M//Q4lwx6H4QgXY492Et9n6eCiPhdY9ALMqNLPB1SV7zN9zgOebQgpr03GCn6TO9top6VDWNru9y8hLI18Az+/8lhsK4GAQRujAUsL/fxv+wix1n1EMEKYSMb0EKNjx4Rfv2WG8TVTiwfgdt9mTufI2rznX/Gb5IWUGUY7bJlJP79Rjuj//4KIObx7D37cA92oq2+SjDA0T0Xhh/lIUX64j1jkIjWWD5S3SN35N036AytGSMYlUnmeb2MyEI8OVnmHeEa4RpZ+m4cA7v6YIOMb5UK+kDLbVndYH0TqMSUj1gdUHWEUfd0kGWjQslnNPI+o6uBvrF7oOAjCytL+fXBOa0eT3AvJoAVFtr93iFVVjBFAxo7bekw//vIALC0tdatLU+B7iuvS2g/c059ZypmrU6FrP4kutM0vtIAMuwXP7xz/AqUAfSzpBsmAYjylbAzu0nuGgIyfaAffpX39zj5tFKzmx9+xyh5/z8l4Tf9nTeKMfp5LZEAL+oSAjPeYU7hH+ENZSQO6R6tNrcNPJHGhDBkI9H2k3+5CydAB2DVzo2TsgPWaI/QP+vGUkfGStQGFN4a/Ks/vs1Jts+owMmbwdysIWl1WcUEGsy1j9hulZPAj/5n1jiwZdB6ZulCGjB1WRAxkgHZmir7agDr8bWLXONAEyHgSk6EwMmgx+PL/J3ob/sOeNBvArTm+F5Ix3lajk9rUnWgXKSLDZ2TsR/ORtzzfQjJSF1pMxpCRITj4ajKsax+bey0y3tMO/9/QigsyVJNjED1LsoSM96yVr4MMczUyqIJG41rHmSwkA1ovG2Ed1nrZQ80D2r3fRGTMoOPAC8sMY+u7SFWSjE9ys/5SN2EXeomibmIsIeMMqeTuamTA4u46ORaT8dqklX/HiszL85KNjMdKRMbFJbepysnRz0JVkowPmNvGQ1pfGIvvw4d4ICkkI3WhGTdLdy4XkAEGdPczLQr5WgN6fSwkQ/lIa0LYcMiXqHw2cirIYHdy4AZzXVpwJMlgM5GBC2M2/oWRoRJ7/ihJRupCMzBFtgtPZWTIYEMr15czGconNZwLnT6KKqoeP4nJoAn4FAgd31tCxvNLPp9CBMZH6DZ0ShFN9iMylEskXejpYxTOABeQMVPDpJskA/8KJXQxZmRgzMh4tUcwxSAK8XiGMOZP/t/HmM0wfBMSIPeJUHWI8V+YhH7CcHvRRZBklxfnRKd/78Rk4F8ZGckLzS7hy8GYpnxDp5z4V04GBjKU/j4IHZpkU2QolmVBqZqW1Qy/8t+bxnBL2oqyQnn8x6g3NLas81hTM8w7Ejqsra1hL7JdI0N61WScJnmhkTEd9s55oUSa6LNpTLd6ctYvQqxaK9AGxY7NLeBMrFLCn9TrBR4hXDaI7jQel+LA6zLAr+d9bG55wY/NbVdtAxBGCBf1WG25ULkXJVRkSKjIkFCRAegHPsw0KjIUeKdHowFhoAWSMep0bhDB/+pMP3ixnoI4hRybm8QeRnj1yLoZzf3v9RSkmGNzkwg9IitihtW1klHwM2o3I+POPtldU1BvWci4yTJgbW8AWRcZzTOVEJU85F4AQ1dVoh7wL8PHTBTAvp5OyIG1z/b6tyD4RN3tczJ6R3DYo2wJ7wSEZlNPuRILlOw8OaQ56LcT31TBFzE9p+pVAvuk24Q87Jvgm7m7KhfrIgNO1WebveB9VT4SFO/8HoaOcPztz2xv2KTCNzQN2x6m/3wgA+mY7fHGDvo9rkNFx+BxPDH51i5B4H0YQmqWmRqLIaWywzyZJt8nPj5fExmrHpv7kZZiN9AJGtCSfECwx0+/MFfQJa0/vL2EPdS+z1z36hvwadDSQ/G7zAWCVHaA2/HdWCMiPBtsPe0jdtAb4q6YGQEZNIMdiQyqawC/McfVzcgIj81d8cGTT4i9hKNn08q8oq0EfEHPaTN4SJu7CX6UWeSDpo3gN+PFD7Re5BT8O3PuDxq8Uy4ecxdriH1wyF9QHfq58oFQ5n6jrYxwv9QZ9C6Fpsf/lMjYOYVGqaK/35gM+pemNVZ9yconWjd9zPfM3t5XEbvBR0gFR0DP6nea4Fn/9hF0E3aGznt6A3+HNGD8wGaAZbjAMhkXL6adnvKWNa+X0f0+ZN1E+eHBVn+o/GGCgzHuJsw5paN1kKHMCVl5LHmL2Xu/VI9W6mhbxPSovyrKM+YtOXgckREGaahIZI5GkxOZjOeXmM6mds+Yi4r+ryphPkrGyUfmgDlKkrHDPHn2esi4EQ6jcKGf2VsZotfEYeUCQpOg6GpIBg/vCl1fDNE8Qybj1WWUDWI2UmSAhUJMVk4y2NGAcPTHKRscDpwWhdP6jdXjIXf+JslAItZ3ERkQ6Gg/Umb7LIAFkrOex8mgTc/8TE1zSck4OYL/71zC4PBBhBJ8r8TuVGEzGBlvSTiMHlmLydijTQcmHW8ZGe/DcLapqXIyWMX/2C8nGXv4eDy0jPvs9OzHEEs1NaZncDcpGeQztaL7CTLgGHY06Ewv0aC3tGW8o3OtQx7axIZk24Rh+ZiHz73grW39ZNz42Nyn1DBgokNZaQ1eQ3gdgnDMwS8w6UBkDgfiJsh4vh16z7G7kIw/oPquB4f8gVv72bYIajzmbOuei9fdTcJjc2/6bNqMcJtJ2Hj5XA+/nZ6zqSY1doQgzMjA4STzg85nmOYLSgYKyZCiFd7CDBQTSikLensGrYL8zm3G60uQwYwTAxmIkYE4GTrGK5MB53Rp9TX4jlrdebfrRQFKjvTN787n3oM73S5tNEeeJ4JAjyANXHna9U5haB11Pe+zUEgzzLtPlK7X4vEez4LgO+h0LIbhjMoeKi2v+0Dp0dwQ7uN5LHjB8brxXOVr0ZybeqHvLLsWTvZZGWfqDeaXX4VA10t7lsgZxnrLgaMgdz7ncb05HDNdVn98uAxWhcnZLMZ1ZkrLekLAGbO3RH93ddI1oOynMVl7ju/kdRZm5TeRUJEhoSKDgW9MV2RQGDYxIUKlIkPhb7GoBxUZALfMx+bmjXIfm5szyuBeLA0qMiRUZEioyJCQPjb3VgfFCjKmEwiXrhfxwq7SIHYVtKpjcyW/ST8I8n/RXqlQnQcqoSJDQkWGhIoMCWFQbHU6KsCpwaOcq0Yv/dng1hoNtLaw0v93TJ0wME0xqueeI4zIZFLAi+lLiWZ1bG6M8NjcW/4eixDhfobbMwwj1VkMGckYn2ZClszWk0VJlaNEtuQTBdbybEmVyQV2c0WVCysXxo63Wbip/LJpfgSIgCqfqDBXEzIiRQAZJpJFiddJOiSpUn4pq42SKqXpYD9ZEmRLdASpksgx8HqyJNeoXEgGnIhJEc/CxloK0qRET8vqYm/IaqdlE9GmgoxKQfDIbKRkbRFWZKWzabGF62ZkYsuOnSGeLIlYnHeWVC4ig6MhdCGtloIIDZzW0yKNRO3TzWRrCKImaZk2iSY6fjpXraHH1GdkwsLVMypx1B2CrErBPcmorPezZGji9mdKXhO3v9NIi8AbtazkmihCRlQTt7+1QGWUTc2qjDrDKJtN3P55VibeU7GscqmWIfpchjytHXWhYTsti7vQPHsbhUHB2ZYRGRQ/09gaIrLKztSqIdp7piQaim5LK51LavZmlgxWuSDRs+JDeDq1dLeK477sdJeLz98YTTIdXFh4J6My3pM309kmwoKO6uls8ZtIvHQ2KQSJZGyGMIjTTEl4p/SlF7QTXbLT7MEvSSbb6YAkZdK2YdNOyIgrjXbjlEp553WeVCm/txaefJOzyYOQkyqJHNnqJksiV26aUhlVrhkj9SjhSBKlQ4mby7MpX8i2osrrZruhyv8Bfl++vva4w20AAAAASUVORK5CYII=")
        conta.append(img)
    }else{
    document.querySelector("#cont").innerHTML=""
    let img = document.createElement("img")
    img.setAttribute("src",data.Poster)
    img.setAttribute("id","image")
    let movname = document.createElement("h1");
    movname.innerText=data.Title
    let year = document.createElement("h4")
    year.innerText = "Year of realese: "+data.Year
    let rating = document.createElement("h4")
    rating.innerText = "Rating: "+data.Rated
    let realese = document.createElement("h4")
    realese.innerText= "Realese Date: "+data.Released
    let runtime = document.createElement("h4")
    runtime.innerText = "Runtime: "+data.Runtime
    let imdb = document.createElement("h4")
    imdb.innerText = "imdbRating: "+ data.imdbRating
    if(data.imdbRating>=8.0){
        tagu = document.createElement("h3")
        tagu.innerText="Recommended 👍"
        conta.append(img,movname,year,rating,realese,runtime,imdb,tagu)
    }else{
    conta.append(img,movname,year,rating,realese,runtime,imdb)
    }
    }
    
}