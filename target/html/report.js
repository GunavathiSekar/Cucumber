$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestdataSum.feature");
formatter.feature({
  "line": 2,
  "name": "Sum Test",
  "description": "",
  "id": "sum-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@calc"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": ": Test the Gmail login",
  "description": "",
  "id": "sum-test;:-test-the-gmail-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sum"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "print number1 as \u0027\u003cno1\u003e\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "print number2 as \u0027\u003cno2\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "i sum \u0027\u003cexpected\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "it should display output",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "sum-test;:-test-the-gmail-login;",
  "rows": [
    {
      "cells": [
        "no1",
        "no2",
        "expected"
      ],
      "line": 11,
      "id": "sum-test;:-test-the-gmail-login;;1"
    },
    {
      "cells": [
        "12",
        "13",
        "25"
      ],
      "line": 12,
      "id": "sum-test;:-test-the-gmail-login;;2"
    },
    {
      "cells": [
        "14",
        "16",
        "30"
      ],
      "line": 13,
      "id": "sum-test;:-test-the-gmail-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": ": Test the Gmail login",
  "description": "",
  "id": "sum-test;:-test-the-gmail-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@calc"
    },
    {
      "line": 3,
      "name": "@sum"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "print number1 as \u002712\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "print number2 as \u002713\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "i sum \u002725\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "it should display output",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 18
    }
  ],
  "location": "Basicoperations.i_fill_in_number1_as_(long)"
});
formatter.result({
  "duration": 110896345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 18
    }
  ],
  "location": "Basicoperations.i_fill_in_number2_as_(long)"
});
formatter.result({
  "duration": 139330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 7
    }
  ],
  "location": "Basicoperations.i_sum_(long)"
});
formatter.result({
  "duration": 3011454,
  "status": "passed"
});
formatter.match({
  "location": "Basicoperations.it_should_display_the_results()"
});
formatter.result({
  "duration": 23636,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": ": Test the Gmail login",
  "description": "",
  "id": "sum-test;:-test-the-gmail-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@calc"
    },
    {
      "line": 3,
      "name": "@sum"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "print number1 as \u002714\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "print number2 as \u002716\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "i sum \u002730\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "it should display output",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 18
    }
  ],
  "location": "Basicoperations.i_fill_in_number1_as_(long)"
});
formatter.result({
  "duration": 130000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 18
    }
  ],
  "location": "Basicoperations.i_fill_in_number2_as_(long)"
});
formatter.result({
  "duration": 111651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 7
    }
  ],
  "location": "Basicoperations.i_sum_(long)"
});
formatter.result({
  "duration": 343348,
  "status": "passed"
});
formatter.match({
  "location": "Basicoperations.it_should_display_the_results()"
});
formatter.result({
  "duration": 26124,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": ": Multiply Test",
  "description": "",
  "id": "sum-test;:-multiply-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@multiply"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "enter number1 as \u0027\u003cno1\u003e\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "enter number2 as \u0027\u003cno2\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "i multiply \u0027\u003cexpected\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "display the results",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "sum-test;:-multiply-test;",
  "rows": [
    {
      "cells": [
        "no1",
        "no2",
        "expected"
      ],
      "line": 23,
      "id": "sum-test;:-multiply-test;;1"
    },
    {
      "cells": [
        "12",
        "13",
        "156"
      ],
      "line": 24,
      "id": "sum-test;:-multiply-test;;2"
    },
    {
      "cells": [
        "14",
        "16",
        "224"
      ],
      "line": 25,
      "id": "sum-test;:-multiply-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": ": Multiply Test",
  "description": "",
  "id": "sum-test;:-multiply-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@multiply"
    },
    {
      "line": 1,
      "name": "@calc"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "enter number1 as \u002712\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "enter number2 as \u002713\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "i multiply \u0027156\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "display the results",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 18
    }
  ],
  "location": "Basicoperations.enter_number1_as_(long)"
});
formatter.result({
  "duration": 182560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 18
    }
  ],
  "location": "Basicoperations.enter_number2_as_(long)"
});
formatter.result({
  "duration": 151148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "156",
      "offset": 12
    }
  ],
  "location": "Basicoperations.i_multiply_(long)"
});
formatter.result({
  "duration": 175096,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 25,
  "name": ": Multiply Test",
  "description": "",
  "id": "sum-test;:-multiply-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@multiply"
    },
    {
      "line": 1,
      "name": "@calc"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "enter number1 as \u002714\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "enter number2 as \u002716\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "i multiply \u0027224\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "display the results",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 18
    }
  ],
  "location": "Basicoperations.enter_number1_as_(long)"
});
formatter.result({
  "duration": 144928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 18
    }
  ],
  "location": "Basicoperations.enter_number2_as_(long)"
});
formatter.result({
  "duration": 101698,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "224",
      "offset": 12
    }
  ],
  "location": "Basicoperations.i_multiply_(long)"
});
formatter.result({
  "duration": 123158,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});