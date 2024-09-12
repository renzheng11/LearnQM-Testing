molecule_electron_distribution_b = [];
molecule_electron_distribution_a = [];
prob_dist_bonding = [];
prob_dist_antibonding = [];

let bohrRadius = 50;

for (let x = -400; x <= 400; x++) {
  for (let d = -400; d <= 400; d++) {
    let a_plus = (Math.abs(x) + a / 2);
    let a_minus = (Math.abs(x) - a / 2);

    let term = Math.exp(-1 / (bohrRadius) * (Math.sqrt(a_plus * a_plus + Math.abs(d) * Math.abs(d)))) + Math.exp(-1 / (bohrRadius) * (Math.sqrt(a_minus * a_minus + Math.abs(d) * Math.abs(d))));
    // console.log(term);
    let prob = 2000 * Math.abs(d) * term * term / bohrRadius;

    let term_dash = Math.exp(-1 / (bohrRadius) * (Math.sqrt(a_plus * a_plus + Math.abs(d) * Math.abs(d)))) - Math.exp(-1 / (bohrRadius) * (Math.sqrt(a_minus * a_minus + Math.abs(d) * Math.abs(d))));
    let prob_dash = 2000 * Math.abs(d) * term_dash * term_dash / bohrRadius;

    // console.log(prob, prob_dash);
    for (let i = 0; i < prob; i++) {
      prob_dist_bonding.push({
        x: x,
        y: d
      });
    }

    for (let i = 0; i < prob_dash; i++) {
      prob_dist_antibonding.push({
        x: x,
        y: d
      });
    }

    // for (let i = 0; i < 1; i++) {
    //   prob_dist_bonding.push({
    //     x: x,
    //     y: d
    //   });
    // }

    // for (let i = 0; i < 1; i++) {
    //   prob_dist_antibonding.push({
    //     x: x,
    //     y: d
    //   });
    // }
  }
}

for (let j = 0; j <= 8000; j++) {
  let i = Math.floor(Math.random() * prob_dist_bonding.length);
  let i_dash = Math.floor(Math.random() * prob_dist_antibonding.length);
  molecule_electron_distribution_b.push(prob_dist_bonding[i]);
  molecule_electron_distribution_a.push(prob_dist_antibonding[i_dash]);
}