import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

@Module({
  name: "CounterModule",
  namespaced: true,
  stateFactory: true,
})
export default class CounterModule extends VuexModule {
  count = 0;

  @Mutation
  increment(delta: number) {
    this.count += delta;
  }
  @Mutation
  decrement(delta: number) {
    this.count -= delta;
  }

  @Action({ commit: "increment" })
  incr() {
    return 5;
  }
  @Action({ commit: "decrement" })
  decr() {
    return 5;
  }
}