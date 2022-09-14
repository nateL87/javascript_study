// 고정(회원가입이 되어있음)
var id = 'easy1004' ;
var pw = '123456' ;

// 로그인해서 들어감
var user_id = 'easy100'
var user_pw = '12345'

if (id == user_id) {
    if (pw == user_pw) {
        console.log("로그인이 되었습니다")
    }else {
        console.log("비밀번호가 틀렸습니다" )
    }
} else {
    console.log("아이디가 틀렷다!!")
}

/* 로그인
아이디 : easy1003
비밀번호 : 1

아이디가 맞음
->비밀번호 검사
비밀번호가 맞음
 로그인이 되었습니다 
비밀번호가 틀림 
비밀번호가 틀렸습니다 

아이디가 틀림
->아이디가 틀렸습니다 
*/