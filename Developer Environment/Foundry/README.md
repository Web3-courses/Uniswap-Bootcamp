# Foundry for developing and deploying smart contracts

Foundry is a fast and modular Ethereum toolkit for smart contracts development.

## Installation

* On windows

1. Download rustup-init from [rustup](https://rustup.rs/) and follow the instructions prompted by installation
2. Check for rust compiler help commands in your terminal using rustc command
3. After that, run the following in the terminal
> cargo install --git https://github.com/foundry-rs/foundry foundry-cli anvil --bins --locked

4. It will take a lot of time. Dont worry, sit tight
5. Enter forge in terminal to have a look at available commands


## Starting the project

1. > foundry init <Newproject> --no-commit
2. Run ``` forge build ``` to run the smart contract and to get the ABI code
3. you will get a new folder called out which contains all the compiled scripts  


## Tools

1. Anvil
2. Forge
3. Cast

## Tests
  
Simple test 
  
  ```
  pragma solidity 0.8.10;

import "forge-std/Test.sol";

contract ContractBTest is Test {
    uint256 testNumber;

    function setUp() public {
        testNumber = 42;
    }

    function testNumberIs42() public {
        assertEq(testNumber, 42);
    }

    function testFailSubtract43() public {
        testNumber -= 43;
    }
}
  ```
  
  In the above code, setUp is optional and invoked before every function/method is called. Functiosn with prefix test are run as tests.
  

A simple Solidity test

```
contract Foo {
  uint256 public x = 1;
  function set(uint256 _x) external {
    x = _x;
  }

  function double() external {
    x = 2 * x;
  }
}

contract FooTest {
  Foo foo;

  // The state of the contract gets reset before each
  // test is run, with the `setUp()` function being called
  // each time after deployment. Think of this like a JavaScript
  // `beforeEach` block
  function setUp() public {
    foo = new Foo();
  }

  // A simple unit test
  function testDouble() public {
    require(foo.x() == 1);
    foo.double();
    require(foo.x() == 2);
  }

  // A failing unit test (function name starts with `testFail`)
  function testFailDouble() public {
    require(foo.x() == 1);
    foo.double();
    require(foo.x() == 4);
  }
}
```
  
## Gas tests and snapshots
  
 1. You can get gas costs in the form of a snapshot
 2. In foundry.toml enter  gas_reports = ["*"] to get gas reports for all files
 3. To get specific contract gas snapshot use gas_reports = ["Counter"]
 4. Enter forge test --gas-report for getting the gas snapshot 
 ![Gas snapshots](https://github.com/Web3-courses/Uniswap-Bootcamp/blob/main/Images/Screenshot%202022-11-16%20115526.png)
  

## Importnat Links

1. [Foundry Book](https://book.getfoundry.sh/)
