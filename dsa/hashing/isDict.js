// https://www.scaler.com/academy/mentee-dashboard/class/59875/homework/problems/10602?navref=cl_tt_lst_sl

function isDictionnary(a, b) {
  let hm = new Map();
  let inOrder = 0;

  for (let i = 0; i < 26; i++) hm.set(b.charAt(i), i);

  // console.log(hm);
  if (a.length == 1) inOrder = 1;

  for (let i = 0; i < a.length - 1; i++) {
    const s1 = a[i];
    const s2 = a[i + 1];

    if (hm.get(s1.charAt(0)) < hm.get(s2.charAt(0))) {
      inOrder = 1;
    } else if (hm.get(s1.charAt(0)) <= hm.get(s2.charAt(0)) && s1.length <= s2.length) {
      inOrder = 1;
    } else {
      inOrder = 0;
      break;
    }
  }
  return inOrder;
}

console.log(
  isDictionnary(
    ["hello", "scaler", "interviewbit"],
    "adhbcfegskjlponmirqtxwuvzy"
  )
);//1
console.log(
  isDictionnary(["fine", "none", "no"], "qwertyuiopasdfghjklzxcvbnm")
);//0
console.log(
  isDictionnary(
    [
      "ipial",
      "qjqgt",
      "vfnue",
      "vjqfp",
      "eghva",
      "ufaeo",
      "atyqz",
      "chmxy",
      "ccvgv",
      "ghtow",
    ],
    "nbpfhmirzqxsjwdoveuacykltg"
  )
); //1
