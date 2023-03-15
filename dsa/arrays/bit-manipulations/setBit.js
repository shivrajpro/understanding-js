// https://www.scaler.com/academy/mentee-dashboard/class/59880/assignment/problems/27344?navref=cl_tt_lst_sl

function binaryToDecimal(A) {
    const B = 2;
    let decimal = 0;
    let position = 0;
  
    while (A > 0) {
      let digit = A % 10;
      decimal += digit * Math.pow(B, position);
      position++;
      A = Math.floor(A / 10);
    }
  
    return decimal;    
}

function setBit(A,B) {
    
}