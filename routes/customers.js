const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");
const jwt = require("jsonwebtoken");

//Get all
router.get("/", async (req, res) => {
  try {
    let customers = await Customer.find();

    res.status(200).send(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get One Custermer by id
router.get("/:id", getCustomer, (req, res) => {
  try {
    res.status(200).send(res.customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Post
router.post("/", async (req, res) => {
  let customer = new Customer({
    UserId: req.body.UserId,
    Name: req.body.Name,
    LastName: req.body.LastName,
    Document: req.body.Document,
    DocumentType: req.body.DocumentType,
    Cellphone: req.body.Cellphone,
    Birthdate: req.body.Birthdate,
    Gender: req.body.Gender,

    //Second Step
    AddressName: req.body.Address.AddressName,
    PostalCode: req.body.Address.PostalCode,
    Address: req.body.Address.Address,
    Number: req.body.Address.Number,
    Complement: req.body.Address.Complement,
    Neighborhood: req.body.Address.Neighborhood,
    City: req.body.Address.City,
    State: req.body.Address.State,
    ReferencePoint: req.body.Address.ReferencePoint,

    //Third
    SymptomsDescription: req.body.SymptomsDescription,
    AccessForm: req.body.AccessForm,
    Crm: req.body.Crm,
    DoctorName: req.body.DoctorName,
    DoctorEmail: req.body.DoctorEmail,
    DoctorCellphone: req.body.DoctorCellphone,

    //fifth Step
    FirstPreference: req.body.FirstPreference,
    SecondPreference: req.body.SecondPreference,
    ThirdPreference: req.body.ThirdPreference,

    //sixth Step
    CheckRememberSchedule: req.body.CheckRememberSchedule,
    CheckShareDoctor: req.body.CheckShareDoctor,
    CheckShareMedicine: req.body.CheckShareMedicine,
    CheckGetNews: req.body.CheckGetNews,

    //seventh Step
    ScheduleKit: req.body.ScheduleKit,
    PeriodScheduleKit: req.body.PeriodScheduleKit,
    ScheduleNurse: req.body.ScheduleNurse,
    PeriodScheduleNurse: req.body.PeriodScheduleNurse
  });

  try {
    let newCustomer = await customer.save();
    res.status(201).send(newCustomer);
  } catch (err) {
    console.log(err);

    res.status(400).json({ message: err.message });
  }
});

//Put
router.put("/:id", getCustomer, async (req, res) => {
  try {
    let customerUpdated = req.body;

    Customer.updateOne({ _id: req.params.id }, customerUpdated, function(
      err,
      customerUpdated
    ) {
      if (err) {
        res.status(400).json({ message: err.message });
      }
      res.status(200).send();
    });
  } catch {
    res.status(400).json({ message: err.message });
  }
});

//Delete
router.delete("/:id", getCustomer, async (req, res) => {
  try {
    // let token = req.headers["authorization"];
    // if (!token)
    //   return res
    //     .status(401)
    //     .send({ auth: false, message: "No token provided." });

    // jwt.verify(token, process.env.SECRET, function(err, decoded) {
    //   if (err)
    //     return res
    //       .status(500)
    //       .send({ auth: false, message: "Failed to authenticate token." });
    // });

    await res.customer.remove();
    res.status(200).send({ message: "Customer deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getCustomer(req, res, next) {
  try {
    customer = await Customer.findById(req.params.id);
    if (customer == null) {
      return res.status(404).json({ message: "Cant find customer" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.customer = customer;
  next();
}

async function getCustomerByUserId(req, res, next) {
  try {
    customer = await Customer.findOne({ UserId: req.params.id });
    if (customer == null) {
      return res.status(404).json({ message: "Cant find customer" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.customer = customer;
  next();
}

router.get("/byUserId/:id", getCustomerByUserId, (req, res) => {
  try {
    res.status(200).send(res.customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id/patients", async (req, res) => {
  try {
    let patients = await Customer.find(req.query);

    res.status(200).send(patients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id/calls", async (req, res) => {
  try {
    let calls = [
      {
        ProfileId: "Medico",
        Name: "Dr. Renan",
        Document: "23456789",
        Birthdate: "04/03/2000"
      },
      {
        ProfileId: "Cuidador",
        Name: "Xpto",
        Document: "13456789",
        Birthdate: "04/03/1999"
      },
      {
        ProfileId: "Paciente",
        Name: "Renan",
        Document: "33456789",
        Birthdate: "04/03/1998"
      }
    ];

    res.status(200).send(calls);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id/historic", async (req, res) => {
  try {
    let historic = [
      {
        Id: "#0001",
        Date: "25/10/2019",
        Type: "Agendamento",
        Title: "Dados cadastrais",
        Description: "Dados cadastrais Integer vulputate malesuada pulvinar"
      },
      {
        Id: "#0002",
        Date: "25/11/2019",
        Type: "Agendamento",
        Title: "Reclamações",
        Description: "Dados cadastrais Integer vulputate malesuada pulvinar"
      },
      {
        Id: "#0003",
        Date: "30/10/2019",
        Type: "Telefonema",
        Title: "Entrega",
        Description: "Dados cadastrais Integer vulputate malesuada pulvinar"
      },
      {
        Id: "#0004",
        Date: "25/08/2019",
        Type: "Email",
        Title: "Agendamento",
        Description: "Dados cadastrais Integer vulputate malesuada pulvinar"
      },
      {
        Id: "#0005",
        Date: "15/10/2019",
        Type: "Email",
        Title: "Entrega",
        Description: "Dados cadastrais Integer vulputate malesuada pulvinar"
      }
    ];

    res.status(200).send(historic);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id/relationship-rule", async (req, res) => {
  try {
    let rule = [
      {
        Type: "Cadastro",
        Percentage: "75",
        Content: [
          {
            Title: "Questionário de Boas Vindas",
            StartDate: "20/10/2019",
            EndDate: "21/10/2019",
            Status: "Enviado"
          },
          {
            Title: "Agendamento da Entrega do kit",
            StartDate: "20/10/2019",
            EndDate: "21/10/2019",
            Status: "Realizado"
          },
          {
            Title: "Agenda Enfermeira",
            StartDate: "20/10/2019",
            EndDate: "21/10/2019",
            Status: "Enviado"
          },
        ]
      },
      {
        Type: "Acesso",
        Percentage: "20",
        Content: [
          {
            Title: "Questionário de Boas Vindas",
            StartDate: "20/10/2019",
            EndDate: "21/10/2019",
            Status: "Enviado"
          },
          {
            Title: "Agendamento da Entrega do kit",
            StartDate: "20/10/2019",
            EndDate: "21/10/2019",
            Status: "Realizado"
          },
          {
            Title: "Agenda Enfermeira",
            StartDate: "20/10/2019",
            EndDate: "21/10/2019",
            Status: "Enviado"
          },
        ]
      },
      {
        Type: "Adesão",
        Percentage: "85",
        Content: [
          {
            Title: "Questionário de Boas Vindas",
            StartDate: "20/10/2019",
            EndDate: "21/10/2019",
            Status: "Enviado"
          },
          {
            Title: "Agendamento da Entrega do kit",
            StartDate: "20/10/2019",
            EndDate: "21/10/2019",
            Status: "Realizado"
          },
          {
            Title: "Agenda Enfermeira",
            StartDate: "20/10/2019",
            EndDate: "21/10/2019",
            Status: "Enviado"
          },
        ]
      },
    ];
    res.status(200).send(rule);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
