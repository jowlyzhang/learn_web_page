function reverse(s) {
    var rev='',
        i = s.length - 1;
    for(i; i > -1; i--) {
        rev = rev + s[i];
    }
    return rev;
}
