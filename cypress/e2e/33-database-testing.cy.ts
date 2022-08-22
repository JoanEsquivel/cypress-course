describe("mySQL database testing", () => {
  it("Create a movie table", function () {
    cy.task(
      "queryDb",
      "CREATE TABLE movies(title VARCHAR(50) NOT NULL,genre VARCHAR(30) NOT NULL,director VARCHAR(60) NOT NULL,release_year INT NOT NULL,PRIMARY KEY(title));"
    );
  });

  it("Insert a movie", function () {
    cy.task(
      "queryDb",
      `INSERT INTO movies VALUES ("Joker", "psychological thriller", "Todd Phillips", 2019),("The Batman", "action", "Matt Reeves", 2022);`
    ).then((result: any) => {
      expect(result.affectedRows).to.equal(2);
      expect(result.message).to.be.equal(
        "&Records: 2  Duplicates: 0  Warnings: 0"
      );
    });
  });

  it("Select all movies", function () {
    cy.task("queryDb", `SELECT * FROM movies;`).then((result: any) => {
      cy.log("First row validation").then(() => {
        expect(result[0].director).to.equal("Todd Phillips");
        expect(result[0].genre).to.equal("psychological thriller");
        expect(result[0].release_year).to.equal(2019);
        expect(result[0].title).to.equal("Joker");
      });
      cy.log("Second row validation").then(() => {
        expect(result[1].director).to.equal("Matt Reeves");
        expect(result[1].genre).to.equal("action");
        expect(result[1].release_year).to.equal(2022);
        expect(result[1].title).to.equal("The Batman");
      });
    });
  });

  it("Update a movie", function () {
    cy.task(
      "queryDb",
      `UPDATE movies SET genre = "test genre" WHERE title="Joker"`
    ).then((result: any) => {
      expect(result.changedRows).to.equal(1);
    });
    cy.task("queryDb", `SELECT genre FROM movies WHERE title="Joker"`).then(
      (result: any) => {
        expect(result[0].genre).to.equal("test genre");
      }
    );
  });
  it("Delete the movie table", function () {
    cy.task("queryDb", `DROP TABLE movies`);
  });
});
