rules = `In a small restaurant, there are (A) tables for one person and (B) tables for two persons.<br>
    It is known that (n) groups of people came today, each consisting of one or two people.<br><br>

    If a group consists of one person, it is seated at a vacant one-seater table (A).<br>
    If there are none of them, it is seated at a vacant two-seater table (B).<br>
    If there are none of them, it is seated at a two-seater table occupied by a single person.<br>
    If there are still none of them, the restaurant denies service to this group.<br><br>
    
    If a group consists of two people, it is seated at a vacant two-seater table (B).<br>
    If there are none of them, the restaurant denies service to this group.<br><br>
    
    Given a chronological order of groups coming, determine the total number of people the restaurant denies service to.<br>
    The input contains two integers A and B (the number of one-seater and the number of two-seater tables respectively),<br>
    and a list of integers (the number of people in each group of clients in chronological order of their arrival).<br>
    Return the total number of people the restaurant denies service to.`;

examples = `There is 1 A table and 2 B tables. The array represents the groups coming in.<br>
    restaurant(1, 2, [1, 2, 1, 1])  =>  0<br><br>
    There is 1 A table and 1 B table.<br>
    restaurant(1, 1, [1, 1, 2, 1])  =>  2`;

function seatPatrons(A_tables, B_tables, patronGroups) {

    let denied = 0;

    for (let i=0; i<patronGroups.length; i++) {

        if (patronGroups[i] == 1 && A_tables > 0) {        
            A_tables --;
        }
        else if (patronGroups[i] == 1 && A_tables == 0 && B_tables > 0) {
            B_tables --;
            A_tables ++;
        }
        else if (patronGroups[i] == 1 && A_tables == 0 && B_tables == 0) {
            denied ++;
        }
        else if (patronGroups[i] == 2 && B_tables > 0) {
            B_tables --;
        }
        else {
            denied +=2;
        }

    }
    return denied;        
}

// Output
document.getElementById('instructions-box').innerHTML = rules;
document.getElementById('examples-box').innerHTML = examples;
document.getElementById('result-box').innerHTML = 
`Number of 1-seat tables: 5<br>
Number of 2-seat tables: 3<br>
Order of patron groups: [1,2,2,1,1,1,2,2,1]<br>
Number of patrons denied: ${seatPatrons(5,3, [1,2,2,1,1,1,2,2,1])}<br><br>
Number of 1-seat tables: 4<br>
Number of 2-seat tables: 2<br>
Order of patron groups: [1,2,2,1,1,1,2,2,1,2]<br>
Number of patrons denied: ${seatPatrons(4,2, [1,2,2,1,1,1,2,2,1,2])}<br><br>
Number of 1-seat tables: 2<br>
Number of 2-seat tables: 2<br>
Order of patron groups: [1,2,2,1]<br>
Number of patrons denied: ${seatPatrons(2,2, [1,2,2,1])}
`