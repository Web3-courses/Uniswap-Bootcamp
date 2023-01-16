
# Defi basics

- An open , global alternative to the current financial system
- Products that let you borrow, save, invest, trade and more
- Based on Distributed ledger technology.


## What is DeFi?

DeFi(Decentralised Finance) is a new form of financial technology where people can trade digital currencies among themselves without the need for a bank. DeFi is supported by blockchain technology. 

## Automated Market Makers
An Automated Market Maker (AMM) is like a robot that helps people buy and sell things in a special kind of market called "crypto market"

Imagine you have a toy box and you want to trade your toy car for a toy robot, but you don't know who has a toy robot that they want to trade for a toy car. That's where the AMM robot comes in!

The AMM robot is like a toy trading matchmaker. It can connect you with other kids who also want to trade their toys. It helps you find the best deal for your toy car and the best toy robot for you.

The AMM robot works like a vending machine. You put in your toy car and it gives you back a toy robot that is worth the same amount. The AMM robot uses a special formula to make sure that the trade is fair for both kids.

It's like a toy exchange market, but instead of having a specific toy or money, you have a digital asset or cryptocurrency. And the AMM robot helps you trade it for other digital assets or cryptocurrency, in a fair and easy way.

So, the next time you want to trade your toy for another toy and you don't know who has what you want, think of the AMM robot as your toy trading helper!

**Little technical**
<br/>

An Automated Market Maker (AMM) is a algorithm that facilitates trading of digital assets on a decentralized exchange (DEX) by providing liquidity to the market.

Think of an AMM as a robot matchmaker that helps connect buyers and sellers of a specific digital asset, such as a cryptocurrency. The AMM algorithm uses a complex mathematical formula, called a constant function, to determine the exchange rate between the assets being traded and ensures that trades are executed fairly for both parties.

Instead of a centralized intermediary, such as a traditional exchange, the AMM acts as a liquidity provider by holding a pool of the assets being traded. When a trade is executed, the assets are automatically swapped between the buyer and seller at the determined exchange rate, with the AMM algorithm adjusting the pool accordingly.

In other words, the AMM algorithm acts as a sort of "virtual vending machine" for digital assets, providing a fair and easy way for individuals to trade without the need for a centralized intermediary.

### Explaining the AMM mathemtaically

- Lets consider an asset A to be 10.
- Similarly conisder and asset B to be 10.
- Now A * B = 100, because both the assets are 10 each

What if?

- Asset B is reduuced to 8 because someone withdrawed 2 units from the asset B pool.
- Now it is 10 * 8 = 100, becuase 100 which is K should be constant.
- We can say 10/10 * 8/10 = 100, because both asset A and B should be 10 each.
- Now we can say that for 1 unit of A, we get 0.8 unit of B.
- So, for 10 units of A, we get 10 * 0.8 which is 8 units of asset B.
- Similarly, for every x units of A we get x * 0.8 units of B.

**Further mathematical explanation**

```

Initially 

A = 10,
B = 10,
K = 100

So, A * B = K;

A/10 = B/10, A = B as A and B both are 10 each

Now, when B =8

A = 10
B = 8
K = 100

A/10 = B/10, A= 0.8B as A is 10 and B is 8

```

When A = 10, B = 10 and K = 100, the constant function holds true: A * B = K.

Since A = B, the ratio of A and B is 1:1, meaning that for every 1 unit of A, you would receive 1 unit of B.

Now when B = 8, the constant function still holds true: A * B = K.

In this case, since A is still 10 and B is 8, the ratio of A and B is 10:8, meaning that for every 1 unit of A, you would receive 0.8 units of B.

This relationship is maintained by adjusting the exchange rate between the two assets, which ensures that trades are executed fairly for both parties and the liquidity of the assets being traded is maintained.