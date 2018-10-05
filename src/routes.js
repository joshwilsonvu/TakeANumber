module.exports = app => {
  // Handle POST to create a admin session (i.e. log on)
  let newSession = (req, res) => {
    if (!req.body || !req.body.primary_email || !req.body.password) {
      res.status(400).send({error: "Email and password required."});
      return;
    }
    let admin = app.admins.find(admin => admin.primary_email === req.body.primary_email);
    if (!admin || admin.password !== req.body.password) {
      res.status(401).send({error: "Incorrect email or password."});
      return;
    }
    res.status(201).send({
      email: admin.primary_email
    });
  };

  // Handle POST to create a new admin account
  let newAdmin = (req, res) => {
    let data = req.body;
    if (
      !data ||
      !data.primary_email ||
      !data.password ||
      !data.first_name ||
      !data.last_name
    ) {
      res.status(400).send({
        error: "Primary email, password, first name, last name required."
      });
      return;
    }
    let admin = app.admins.find(admin => admin.primary_email === data.primary_email);
    if (admin) {
      res.status(400).send({error: "Email already in use."});
      return;
    }
    let adminToAdd = _.pick(
      data,
      "primary_email",
      "password",
      "first_name",
      "last_name",
      // TODO: include "image"
    );
    app.admins.push(adminToAdd);
    res.status(201).send({
      primary_email: data.primary_email
    });
  };

  // Handle GET to fetch admin information
  let getAdmin = (req, res) => {
    let admin = app.admins.find(admin => admin.primary_email === req.params.primary_email);
    if (!admin) {
      res.status(404).send({error: "Unknown email address."});
    } else {
      admin = _.pick(
        admin,
        "primary_email",
        "first_name",
        "last_name",
        // TODO: include "image"
      );
      res.status(200).send(admin);
    }
  };

  // Handle DELETE to remove an admin
  let deleteAdmin = (req, res) => {
    let ind = app.admins.findIndex(admin => admin.primary_email === req.params.primary_email);
    if (ind !== -1) {
      app.admins.splice(ind, 1); // remove admin
    }
  };

  // Handle POST to create a new organization
  let newOrg = (req, res) => {
    let data = req.body;
    if (!data || !data.name) {
      // TODO add more fields
      res.status(400).send({error: "name field required"});
      return;
    }
    data.name = data.name.toLowerCase();
    let org = app.orgs.find(org => org.name === data.name);
    if (org) {
      res.status(400).send({error: "Organization name already in use."});
      return;
    }
    // TODO add data to org

    app.orgs.push(org);
    res.status(201).send({
      name: org.name
    });
  };

  // Handle GET to fetch org information
  let getOrg = (req, res) => {
    let org = app.orgs.find(org => org.name === req.params.name);
    if (!org) {
      res.status(404).send({error: "Unknown organization name."});
    } else {
      res.status(200).send(org);
    }
  };

  // Handle DELETE to remove an organization
  let deleteOrg = (req, res) => {
    let ind = app.orgs.findIndex(org => org.name === req.params.name);
    if (ind !== -1) {
      app.orgs.splice(ind, 1); // remove admin
    }
  };

  app.post("/v1/session", newSession);

  app.post("/v1/admin", newAdmin);
  app.get("/v1/admin/:primary_email", getAdmin);
  app.delete("/v1/admin/:primary_email", deleteAdmin);

  app.post("/v1/org", newOrg);
  app.get("/v1/org/:name", getOrg);
  app.delete("/v1/org/:name", deleteOrg);
};
