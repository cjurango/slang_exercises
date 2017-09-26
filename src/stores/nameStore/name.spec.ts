import test from 'ava'

import NameStore from './name.store'

test('it should edit name', async (t) => {
  const nameStore = new NameStore()
  nameStore.setName("test")
  t.is(nameStore.name, "test");
})