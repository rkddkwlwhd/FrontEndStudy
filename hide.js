const privateDatas = document.querySelectorAll('.private')
function onoff(){
    if(self.value === '개인 정보 숨기기') {
        privateDatas.forEach((item) => {
            item.style.display = 'none';
        })
        self.value = '개인 정보 보이기'
    } else {
        document.getElementById('phone_number').style.display = 'block';
        document.getElementById('age').style.display = 'block';
        self.value = '개인 정보 숨기기'
    }
}