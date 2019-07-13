// PROBLEM: given an array of stock prices where the index shows the time past trading,
// return the best profit possible from one purchase and one sale of a stock
// no shorting

// APPROACH: naive approach is to have a for loop go through each price and set is as the buy price
// have a second for loop start at one after the buy price and see if that profit would be greater than the current max profit
// Runtime for this is n^2 (our outer for loop goes through all the times and price but inner loop goes through one fewer price every time)
// this is n + (n-1) + (n-2) ... which is O(n^2)

// APPROACH (better): using a greedy approach to keep track of the max profit as we go
// as we iterate, we know we have found a new max profit if the current price - lowest price is greater than max profit
// ae at each iteration, maxprofit is either the same as last time, or the max profit we get by selling at the current price
// so we always need to keep track of the lowest price we have seen so far
// TIME: O(n) lnear
// SPACE: O(1) constant

function getMaxProfit(stockPrices) {
  if (stockPrices.length < 2) {
    throw new error('error less than two stocks')
  }
  let maxProfit = stockPrices[1] - stockPrices[0];
  let lowestBuyPrice = Math.min(stockPrices[0], stockPrices[1]);
  
  for (let i = 2; i < stockPrices.length; i++) {
    let currentPrice = stockPrices[i];
    // calculate the new max profit first before setting the lowestBuyPrice so we make sure we aren't trying to buy and sell stocks at the current price
    maxProfit = Math.max(maxProfit, currentPrice - lowestBuyPrice);
    lowestBuyPrice = Math.min(lowestBuyPrice, currentPrice)
  }
  
  return maxProfit;
}
