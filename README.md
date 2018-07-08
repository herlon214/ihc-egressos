# IHC-Egressos

University Egress System build with React, Redux, ImmutableJS, Material Design.

## Installation

* `git clone git@github.com:herlon214/ihc-egressos.git`
* `cd ihc-egressos`
* `npm install`
* `npm start`

## Reducers

#### Colleges
Here is a example of actual structure, you can find out comments in the reducer's code:
```
{  
  "list":[  
    {  
      "id":"78ade10d-600d-4069-b433-0f40dc620081",
      "name":"FACE"
    },
    {  
      "id":"5560dc4b-731c-4f4a-b9f4-7ad334665c3a",
      "name":"FCA"
    },
    {  
      "id":"14931c8f-cf64-47c3-add5-fcfc8675dcd5",
      "name":"FCBA"
    },
    {  
      "id":"26d822da-6ca1-4c89-8e73-404dfd7f8a5b",
      "name":"FACET"
    },
    {  
      "id":"8b52916b-a759-430b-bd96-0324f8709807",
      "name":"FCH"
    },
    {  
      "id":"4110de91-671a-467b-bc7b-742e500fb2c2",
      "name":"FACALE"
    },
    {  
      "id":"2315fe2c-a9c2-42f1-bbb6-77febf30a72d",
      "name":"FADIR"
    },
    {  
      "id":"22f12dcd-5ca4-4d92-b510-04eb45e0de4e",
      "name":"FAEN"
    },
    {  
      "id":"51e2da1c-ae8e-4d4d-8410-119abdca0df4",
      "name":"FAED"
    }
  ]
}
```

#### Companies
Here is a example of actual structure, you can find out comments in the reducer's code:
```
{  
  "list":[  
    {  
      "id":"27e84ac7-a8f8-4080-b9c4-edd56c9b1360",
      "name":"Soft.Brasil LTDA.",
      "fantasy_name":"Soft Brasil",
      "national_register_number":"20.185.688/7945-870",
      "email":"soft_brasil@gmail.com"
    },
    {  
      "id":"5adece99-0b74-47db-ac53-8e648ba84d1f",
      "name":"DOARE GESTAO FINANCEIRA LTDA",
      "fantasy_name":"DOARE DOACOES",
      "national_register_number":"17.094.702/0001-84",
      "email":"ruy@doare.org"
    },
    {  
      "id":"2059300b-232b-4ad7-a224-1c7b59046060",
      "name":"ZZN Internet Media Group Ltda",
      "fantasy_name":"Reduza",
      "national_register_number":"16.725.212/0001-76",
      "email":"contato@reduza.com.br"
    }
  ]
}
```

#### Egresses
Here is a example of actual structure, you can find out comments in the reducer's code:
```
{  
  "actual":{  

  },
  "filter":{  
    "name":null,
    "ingress_year":null,
    "course":null
  },
  "list":[  
    {  
      "id":"13085d5d-05b0-4909-b0a0-51c66e98795d",
      "name":"Herlon Aguiar",
      "course":"Sistemas de Informação",
      "ingress_year":2014,
      "egress_year":2018
    },
    {  
      "id":"7e0f7913-8786-42c7-805c-b89044fabd61",
      "name":"Jeovano Coutinho",
      "course":"Sistemas de Informação",
      "ingress_year":2014,
      "egress_year":2018
    },
    {  
      "id":"d51c1ecf-6d7f-4558-a170-b238c91ca5ec",
      "name":"Andrei Mattos",
      "course":"Artes Cênicas",
      "ingress_year":2012,
      "egress_year":2016
    },
    {  
      "id":"506af594-7e38-4630-9abd-57c0535d8cc2",
      "name":"Jone Arce",
      "course":"Agronomia",
      "ingress_year":2010,
      "egress_year":2014
    }
  ]
}
```