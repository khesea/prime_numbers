function go() {
  let n = document.getElementById('number').value;
  let list = [];
  justDigit:
    for (let i = 2; i <= n; i++) {

      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue justDigit;
      }
      list.push(' ' + i);
      document.getElementById('result').innerHTML = list;
    }
}
