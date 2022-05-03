import { VuexModule, Module, MutationAction, getModule } from "vuex-module-decorators"
import { modulesStore } from "./index"
import { persons } from './static-persons'
//import _keyBy from 'lodash/keyBy'
import { keyBy } from "lodash"

@Module({
	name: 'PersonsModule',
	store: modulesStore,
	dynamic: true,
})
class PersonsModule extends VuexModule {
	persons: any = {}

	get personFullName() {
		return (id: string) => {
			const { name, lastName } = this.persons[id]
			return `${name} ${lastName}`
		}
	}

	@MutationAction
	async getPersons() {
		await new Promise(resolve => setTimeout(resolve, 500))
		return { persons: keyBy(persons, 'id') }
	}
}

export default getModule(PersonsModule)
