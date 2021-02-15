<script lang="ts">
import Vue from 'vue';
import { MDCRipple } from '@material/ripple';
import { MDCLinearProgress } from '@material/linear-progress';

export default Vue.extend({
  name: 'TestContent2',
  data() {
    return {
      accounts: [
        { name: 'Checking', code: '1234', balance: '2,215.13' },
        { name: 'Home Savings', code: '5678', balance: '8,676.88' },
        { name: 'Car Savings', code: '9012', balance: '987.48' },
        { name: 'Vacation', code: '1891', balance: '253.00' },
        // { name: 'Clothes', code: '0640', balance: '64.56' },
        // { name: 'Food Funds', code: '8406', balance: '18.66' },
        // { name: 'Coffee', code: '7756', balance: '2.45' }
      ] as { name: string; code: string; balance: string }[],
      bills: [
        { name: 'RedPay Credit', due: 'Jan 29', amount: '45.36' },
        { name: 'Rent', due: 'Feb 9', amount: '1,200.00' },
        { name: 'TabFine Credit', due: 'Feb 22', amount: '87.33' },
        { name: 'ABC Loan', due: 'Feb 29', amount: '400.00' }
      ] as { name: string; due: string; amount: string }[],
      alerts: [
        { text: 'Heads up, you\'ve used up 90% of your Shopping budget for this month.', icon: 'sort' },
        { text: 'You\'ve spent $120 on Restaurants this week.', icon: 'sort' },
        { text: 'You\'ve spent $24 in ATM fees this month.', icon: 'credit_card' },
        { text: 'Good work! Your checking account is 4% higher than this time last month.', icon: 'attach_money' },
        { text: 'Increase your potential tax deduction! Assign categories to 16 unassigned transactions.', icon: 'not_interested' },
        { text: 'Get every tax deduction you\'re entitled to. Assign categories to your 16 uncategorized transactions.', icon: 'pie_chart' },
        { text: 'Your ABC Loan payment of $325.81 was received!', icon: 'attach_money' },
        { text: 'Open an IRA account and get $100 bonus.', icon: 'attach_money' }
      ] as { text: string; icon: string }[],
      budgets: [
        { category: 'Coffee Shops', spent: 45.49, amount: 70 },
        { category: 'Groceries', spent: 16.45, amount: 170 },
        { category: 'Restaurants', spent: 123.25, amount: 170 },
        { category: 'Food Funds', spent: 112.35, amount: 400 }
      ] as { category: string; spent: number; amount: number }[],
      alertsSeeAllButtonRipple: undefined as MDCRipple[] | undefined,
      budgetLinerProgresses: undefined as MDCLinearProgress[] | undefined
    }
  },
  mounted: function() {
    this.$data.alertsSeeAllButtonRipple = [].map.call(document.querySelectorAll('.mdc-button'), function (el) {
      return new MDCRipple(el);
    });

    this.$data.budgetLinerProgresses = [].map.call(document.querySelectorAll('.mdc-linear-progress'), function(el: Element) {
      const linearProgress = new MDCLinearProgress(el);
      const valueNow = el.getAttribute('aria-valuenow') as string;
      const valueTotal = el.getAttribute('aria-valuemax') as string;
      linearProgress.progress = parseFloat(valueNow) / parseFloat(valueTotal);

      return linearProgress;
    });
  },
  beforeDestroy: function() {
    if(this.$data.alertsSeeAllButtonRipple) {
      this.$data.alertsSeeAllButtonRipple.forEach((component: MDCRipple) => {
        component.destroy();
      });

      this.$data.alertsSeeAllButtonRipple = undefined;
    }

    if(this.$data.budgetLinerProgresses) {
      this.$data.budgetLinerProgresses.forEach((component: MDCLinearProgress) => {
        component.destroy();
      });

      this.$data.budgetLinerProgresses = undefined;
    }
  }
});
</script>

<template>
  <div class="a-c--1280 dashboard-container">

    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-3-desktop dashboard__alerts-cell">
          <div class="mdc-card">
            <div class="mdc-card__content">
              <div class="dashboard-card__header">
                <div class="dashboard-card__headline">Alerts</div>
                <div class="mdx-d--flex mdx-align-items--center">
                  <div class="mdx-d--none-desktop">
                    <button class="mdc-button">
                      <div class="mdc-button__ripple"></div>
                      <span class="mdc-button__label">See All</span>
                    </button>
                  </div>
                  <div>
                    <button class="material-icons mdc-icon-button">more_vert</button>
                  </div>
                </div>
              </div>
              <div class="dashboard-card-table mdx-pt--1-desktop mdx-pb--2-phone">
                <div class="mdx-d--grid-tablet" style="grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 36px;">
                  <div v-for="(alert, index) in alerts" :key="index"
                    class="mdx-d--flex mdc-typography--body2 mdx-py--1 mdx-border--bottom-desktop mdx-border--top-tablet"
                    :class="{ 'mdx-border--top': index == 0,
                              'mdx-d--none-phone': index != 0,
                              'mdx-d--none-tablet': index > 2 }">
                    <div class="mdx-flex-grow--1 mdx-pr--2 mdx-theme--on-surface-high">{{ alert.text }}</div>
                    <div class="mdx-theme--on-surface-medium">
                      <span class="material-icons">{{ alert.icon }}</span>
                    </div>
                  </div>
                </div>
                <div class="dashboard-card-table__more mdx-d--none-phone mdx-d--none-tablet">
                  <button class="mdc-button">
                    <div class="mdc-button__ripple"></div>
                    <span class="mdc-button__label">See All</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-9 dashboard__main-cell">
          <div class="mdc-layout-grid__inner">
            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop">
              <div class="mdc-card">
                <div class="mdc-card__content">
                  <div class="dashboard-card__header">
                    <div class="dashboard-card__headline">Accounts</div>
                    <div><button class="material-icons mdc-icon-button">more_vert</button></div>
                  </div>
                  <div class="dashboard-card__primary-value">$12,132.49</div>
                  <div class="dashboard-card-table">
                    <div class="mdc-layout-grid__inner">
                      <div></div>
                      <div></div>
                    </div>

                    <table class="dashboard-card-table__table">
                      <tbody>
                        <tr v-for="(acc, index) in accounts" :key="index">
                          <td class="accounts-table__name-cell">
                            <div>{{ acc.name }}</div>
                            <div class="mdx-theme--on-surface-disabled mdx-d--none-desktop">
                              &middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;{{ acc.code }}
                            </div>
                          </td>
                          <td class="mdx-theme--on-surface-disabled mdx-d--none mdx-d--table-cell-desktop">
                            &middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;{{ acc.code }}
                          </td>
                          <td class="accounts-table__currency-cell">$</td>
                          <td class="accounts-table__balance-cell">{{ acc.balance }}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="dashboard-card-table__more">
                      <button class="mdc-button">
                        <div class="mdc-button__ripple"></div>
                        <span class="mdc-button__label">See All</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop">
              <div class="mdc-card">
                <div class="mdc-card__content">
                  <div class="dashboard-card__header">
                    <div class="dashboard-card__headline">Bills</div>
                    <div><button class="material-icons mdc-icon-button">more_vert</button></div>
                  </div>
                  <div class="dashboard-card__primary-value">$1,810.09</div>
                  <div class="dashboard-card-table">
                    <table class="dashboard-card-table__table">
                      <tbody>
                        <tr v-for="(bill, index) in bills" :key="index">
                          <td class="accounts-table__name-cell">
                            <div>{{ bill.name }}</div>
                            <div class="mdx-theme--on-surface-disabled mdx-d--none-desktop">Due {{ bill.due }}</div>
                          </td>
                          <td class="mdx-theme--on-surface-disabled mdx-d--none mdx-d--table-cell-desktop">Due {{ bill.due }}</td>
                          <td class="accounts-table__currency-cell">-$</td>
                          <td class="accounts-table__balance-cell">{{ bill.amount }}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="dashboard-card-table__more">
                      <button class="mdc-button">
                        <div class="mdc-button__ripple"></div>
                        <span class="mdc-button__label">See All</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
              <div class="mdc-card">
                <div class="mdc-card__content">
                  <div class="dashboard-card__header">
                    <div class="dashboard-card__headline">January Budget</div>
                    <div><button class="material-icons mdc-icon-button">more_vert</button></div>
                  </div>
                  <div class="dashboard-card__primary-value">
                    $717.72 <span class="dashboard-card__primary-value-label">Left</span>
                    <span class="mdx-theme--on-surface-disabled">
                      <span class="dashboard-card__primary-value-separator">/</span>
                      <span>$1,210.00 <span class="dashboard-card__primary-value-label">Total</span></span>
                    </span>
                  </div>
                  <div class="dashboard-card-table">
                    <table class="dashboard-card-table__table">
                      <tbody>
                        <tr v-for="(budget, index) in budgets" :key="index">
                          <td class="mdx-theme--on-surface-high" style="white-space: nowrap;">
                            <div>{{ budget.category }}</div>
                            <div class="currency-font mdx-theme--on-surface-disabled">${{ budget.spent }} / ${{ budget.amount }}</div>
                          </td>
                          <td width="99%" style="padding-left: 16px; padding-right: 16px;">
                            <div class="mdc-linear-progress" aria-valuemin="0" :aria-valuemax="budget.amount" :aria-valuenow="budget.spent">
                              <div class="mdc-linear-progress__buffer">
                                <div class="mdc-linear-progress__buffer-bar"></div>
                                <div class="mdc-linear-progress__buffer-dots"></div>
                              </div>
                              <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
                                <span class="mdc-linear-progress__bar-inner"></span>
                              </div>
                              <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                <span class="mdc-linear-progress__bar-inner"></span>
                              </div>
                            </div>
                          </td>
                          <!-- <td class="accounts-table__code-cell">Due {{ bill.due }}</td> -->
                          <td class="accounts-table__currency-cell">$</td>
                          <td class="budget-table__amount-left-cell">
                            <span class="budget-table__amount-left">{{ (budget.amount - budget.spent).toFixed(2) }}</span>
                            <span class="budget-table__amount-left-label mdx-theme--on-surface-disabled">Left</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="dashboard-card-table__more">
                      <button class="mdc-button">
                        <div class="mdc-button__ripple"></div>
                        <span class="mdc-button__label">See All</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@material/typography';
@use '@material/theme';
@use '@material/data-table';
@use '@material/layout-grid';

.currency-font {
  font-family: 'Roboto Mono', monospace;
}

@include layout-grid.media-query_(desktop) {
  .dashboard__alerts-cell {
    @include layout-grid.cell-order(2);
  }

  .dashboard__main-cell {
    @include layout-grid.cell-order(1);
  }
}


.dashboard-card {
  &__header {
    display: flex;
    align-items: center;
    padding-left: 24px;
    padding-top: 8px;
    padding-right: 8px;
  }

  &__headline {
    @include typography.typography(overline);
    flex-grow: 1;
  }

  &__primary-value {
    padding-left: 24px;
    padding-bottom: 24px;
    @include typography.typography(headline3);
    //font-family: 'Roboto Mono', monospace;
    border-bottom: 1px solid data-table.$stroke-color;
  }

  &__primary-value-label {
    font-size: 14px;
  }

  &__primary-value-separator {
    display: inline-block;
    margin:0 24px;
  }
}

.dashboard-card-table {
  padding:0 24px 8px 24px;

  tr {
    border-bottom: 1px solid data-table.$stroke-color;
    
    td {
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }

  &__table {
    width: 100%;
    border-collapse: collapse;
    @include typography.typography(body2);
  }

  &__more {
    text-align: center;
    margin-bottom: 8px;
    margin-top: 8px;

    button {
      width: 100%;
    }
  }
}

.accounts-table {
  &__currency-cell {
    font-weight: bold;
    text-align: right;
  }

  &__balance-cell {
    text-align: right;
    @include typography.typography(body1);
    font-family: 'Roboto Mono', monospace;
    width:0.1%;
    white-space: nowrap;
    padding-left: 16px;
  }
}

.budget-table {

  &__amount-left-cell {
    text-align: right;
    //@include typography.typography(body1);
    //font-family: 'Roboto Mono', monospace;
    width:0.1%;
    white-space: nowrap;
    padding-left: 16px;
  }

  &__amount-left {
    @include typography.typography(body1);
    font-family: 'Roboto Mono', monospace;
  }

  &__amount-left-label {
    margin-left: 16px;
    font-size: 10px;
  }
}
</style>