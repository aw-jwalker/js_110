# Intro to PEDAC

## The Acronym

1. P - Understand the [P]roblem
2. E - [E]xamples and test cases
3. D - [D]ata structure
4. A - [A]lgorithm
5. C - [C]ode

## Demo - 

### Problem

#### Description
Given a string, write a function changeMe which returns the same
string but with all the words in it that are palindromes uppercased.

```javascript
changeMe("We will meet at noon") === "We will meet at NOON"
changeMe("No palindromes here") === "No palindromes here"
changeMe("") === ""
changeMe("I LOVE my mom and dad equally") === "I LOVE my MOM and DAD equally"
```

* main thing here is to ask question to clarify any implied constraints or expected return values, etc
* for example, mutate original or return new? 

#### Inputs/Outputs and Rules
From the problem description and clarifying questions, we can conclude this step with inputs and outputs

* input(s): string
* output(s): new string (not the same object)

**RULES**

1. explicit reqs:
    - palindrome should be converted to all caps
    - they are case sensitive, dont convert Mom
2. implicit reqs:
    - if the string is an empty string, the result should also be an empty string


