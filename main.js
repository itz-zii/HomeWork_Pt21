const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Phone", category: "Electronics", price: 800 },
  { id: 3, name: "Shirt", category: "Clothing", price: 40 },
  { id: 4, name: "Shoes", category: "Clothing", price: 60 },
  { id: 5, name: "Headphones", category: "Electronics", price: 150 },
];

const electronics = products.filter((p) => p.category === "Electronics");
console.log("Electronics:", electronics);
const totalElectronics = electronics.reduce((sum, p) => sum + p.price, 0);
console.log("Total Electronics:", totalElectronics);
const productsByCategory = products.reduce((acc, p) => {
  (acc[p.category] = acc[p.category] || []).push(p);
  return acc;
}, {});
console.log("Products by category:", productsByCategory);

const students = [
  { id: 1, name: "An", scores: { math: 8, english: 7, science: 9 } },
  { id: 2, name: "Bình", scores: { math: 6, english: 8, science: 7 } },
  { id: 3, name: "Châu", scores: { math: 9, english: 6, science: 8 } },
];

students.forEach(
  (s) => (s.avg = (s.scores.math + s.scores.english + s.scores.science) / 3)
);
console.log("Students with avg:", students);
const topStudent = students.reduce((a, b) => (a.avg > b.avg ? a : b));
console.log("Top student:", topStudent);
console.log(
  "Students sorted by avg:",
  [...students].sort((a, b) => b.avg - a.avg)
);

const orders = [
  {
    orderId: 101,
    customer: "John",
    items: [{ name: "Laptop", price: 1000, quantity: 1 }],
  },
  {
    orderId: 102,
    customer: "Alice",
    items: [
      { name: "Phone", price: 500, quantity: 2 },
      { name: "Charger", price: 50, quantity: 3 },
    ],
  },
  {
    orderId: 103,
    customer: "Bob",
    items: [{ name: "Headphones", price: 200, quantity: 2 }],
  },
];

orders.forEach(
  (o) => (o.total = o.items.reduce((sum, i) => sum + i.price * i.quantity, 0))
);
console.log("Orders with total:", orders);
const richestCustomer = orders.reduce((a, b) => (a.total > b.total ? a : b));
console.log("Customer with highest order:", richestCustomer);
const allProducts = orders.flatMap((o) => o.items);
const productsSummary = allProducts.reduce(
  (acc, i) => ((acc[i.name] = (acc[i.name] || 0) + i.quantity), acc),
  {}
);
console.log("Products summary:", productsSummary);

const employees = [
  { id: 1, name: "Mai", department: "IT", salary: 1200 },
  { id: 2, name: "Nam", department: "HR", salary: 800 },
  { id: 3, name: "Hà", department: "IT", salary: 1500 },
  { id: 4, name: "Linh", department: "Marketing", salary: 900 },
  { id: 5, name: "Phúc", department: "IT", salary: 1100 },
];

const salaryByDept = employees.reduce(
  (acc, e) => ((acc[e.department] = (acc[e.department] || 0) + e.salary), acc),
  {}
);
console.log("Total salary by department:", salaryByDept);
const topByDept = employees.reduce((acc, e) => {
  acc[e.department] =
    !acc[e.department] || e.salary > acc[e.department].salary
      ? e
      : acc[e.department];
  return acc;
}, {});
console.log("Top salary by department:", topByDept);
const employeesByDept = employees.reduce(
  (acc, e) => ((acc[e.department] = (acc[e.department] || []).concat(e)), acc),
  {}
);
console.log("Employees by department:", employeesByDept);

const watchHistory = [
  { userId: 1, videoId: "A1", duration: 10 },
  { userId: 2, videoId: "B1", duration: 15 },
  { userId: 1, videoId: "A1", duration: 20 },
  { userId: 3, videoId: "C1", duration: 30 },
  { userId: 2, videoId: "B1", duration: 5 },
  { userId: 1, videoId: "A2", duration: 25 },
  { userId: 3, videoId: "C1", duration: 15 },
];

const totalByVideo = watchHistory.reduce(
  (acc, w) => ((acc[w.videoId] = (acc[w.videoId] || 0) + w.duration), acc),
  {}
);
console.log("Total watch time by video:", totalByVideo);
const topVideo = Object.entries(totalByVideo).reduce(
  (a, [v, t]) => (t > a[1] ? [v, t] : a),
  ["", 0]
);
console.log("Top video:", topVideo);
const watchByUser = watchHistory.reduce(
  (acc, w) => (
    (acc[w.userId] = acc[w.userId] || {}),
    ((acc[w.userId][w.videoId] = (acc[w.userId][w.videoId] || 0) + w.duration),
    acc),
    acc
  ),
  {}
);
console.log("Watch history by user:", watchByUser);

const matches = [
  { teamA: "A", teamB: "B", scoreA: 2, scoreB: 1 },
  { teamA: "C", teamB: "D", scoreA: 1, scoreB: 3 },
  { teamA: "A", teamB: "C", scoreA: 2, scoreB: 2 },
  { teamA: "B", teamB: "D", scoreA: 0, scoreB: 1 },
  { teamA: "A", teamB: "D", scoreA: 3, scoreB: 1 },
];

const teams = {};
matches.forEach((m) => {
  [
    [m.teamA, m.scoreA, m.scoreB],
    [m.teamB, m.scoreB, m.scoreA],
  ].forEach(([team, s, g]) => {
    if (!teams[team]) teams[team] = { win: 0, draw: 0, lose: 0, goal: 0 };
    teams[team].goal += s;
    if (s > g) teams[team].win++;
    else if (s < g) teams[team].lose++;
    else teams[team].draw++;
  });
});
console.log("Teams stats:", teams);
const ranking = Object.entries(teams)
  .map(([team, s]) => ({ team, points: s.win * 3 + s.draw, goal: s.goal }))
  .sort((a, b) => b.points - a.points);
console.log("Ranking:", ranking);
const topGoalTeam = Object.entries(teams).reduce(
  (a, [team, s]) => (s.goal > a.goal ? { team, goal: s.goal } : a),
  { team: "", goal: 0 }
);
console.log("Team with most goals:", topGoalTeam);

const projectEmployees = [
  { id: 1, name: "An", projects: ["P1", "P2"] },
  { id: 2, name: "Bình", projects: ["P2", "P3"] },
  { id: 3, name: "Châu", projects: ["P1", "P3", "P4"] },
  { id: 4, name: "Dũng", projects: ["P4"] },
];

const employeesByProject = {};
projectEmployees.forEach((e) =>
  e.projects.forEach(
    (p) =>
      (employeesByProject[p] = (employeesByProject[p] || []).concat(e.name))
  )
);
console.log("Employees by project:", employeesByProject);
const topProject = Object.entries(employeesByProject).reduce(
  (a, [p, list]) => (list.length > a[1] ? [p, list.length] : a),
  ["", 0]
);
console.log("Project with most employees:", topProject);

const reviews = [
  { productId: "P1", userId: "U1", rating: 5 },
  { productId: "P2", userId: "U2", rating: 4 },
  { productId: "P1", userId: "U3", rating: 3 },
  { productId: "P3", userId: "U1", rating: 4 },
  { productId: "P2", userId: "U3", rating: 2 },
  { productId: "P1", userId: "U2", rating: 4 },
];

const avgRating = {};
reviews.forEach(
  (r) =>
    (avgRating[r.productId] = (avgRating[r.productId] || []).concat(r.rating))
);
Object.keys(avgRating).forEach(
  (k) =>
    (avgRating[k] =
      avgRating[k].reduce((a, b) => a + b, 0) / avgRating[k].length)
);
console.log("Average rating by product:", avgRating);
const topRated = Object.entries(avgRating).reduce(
  (a, [p, r]) => (r > a[1] ? [p, r] : a),
  ["", 0]
);
console.log("Top rated product:", topRated);
const reviewsByProduct = reviews.reduce(
  (acc, r) => ((acc[r.productId] = (acc[r.productId] || []).concat(r)), acc),
  {}
);
console.log("Reviews by product:", reviewsByProduct);

const transactions = [
  { id: 1, account: "A", type: "deposit", amount: 1000 },
  { id: 2, account: "B", type: "withdraw", amount: 200 },
  { id: 3, account: "A", type: "withdraw", amount: 500 },
  { id: 4, account: "C", type: "deposit", amount: 700 },
  { id: 5, account: "B", type: "deposit", amount: 300 },
];

const balances = {};
transactions.forEach(
  (t) =>
    (balances[t.account] =
      (balances[t.account] || 0) +
      (t.type === "deposit" ? t.amount : -t.amount))
);
console.log("Balances:", balances);
const richestAccount = Object.entries(balances).reduce(
  (a, [acc, b]) => (b > a[1] ? [acc, b] : a),
  ["", 0]
);
console.log("Account with highest balance:", richestAccount);
