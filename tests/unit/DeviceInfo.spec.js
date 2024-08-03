import { shallowMount } from '@vue/test-utils';
import DeviceInfo from '@/components/body/DeviceInfo.vue';

describe('DeviceInfo.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(DeviceInfo, {
      propsData: {
        device: {
          typeOfEquipment: 'Весы',
          workStatus: 'Готов к работе',
          title: 'Аналитические весы',
          producer: 'Ohaus',
          model: 'AX-123',
          responsibleUnit: 'Группа обслуживания лабораторного оборудования',
          operationalUnit: 'Химико-аналитическая лаборатория 2.0',
          MOL: 'Иванов Иван Иванович',
          territory: 'г.Санкт-Петербург(Нойдорф)',
          serialNumber: 'B715976163',
          GUID: '508b2a71-662e-4983-ae0c-3cb0c1cd21c5',
          bimsID: '49db8db1-585f-4b9e-bbf0-8a59698edc8b',
          tam: 'А-001234',
        }
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders device information correctly', () => {
    const deviceInfoItems = wrapper.findAll('.device-info__item');
    expect(deviceInfoItems.length).toBe(12);
    expect(deviceInfoItems.at(0).text()).toContain('Тип оборудования: Весы');
    expect(deviceInfoItems.at(1).text()).toContain('Статус: Готов к работе');
    expect(deviceInfoItems.at(2).text()).toContain('Изготовитель: Ohaus');
    expect(deviceInfoItems.at(3).text()).toContain('Модель: AX-123');
    expect(deviceInfoItems.at(4).text()).toContain('Ответственное подразделение (ремонт): Группа обслуживания лабораторного оборудования');
    expect(deviceInfoItems.at(5).text()).toContain('Эксплуатационное подразделение: Химико-аналитическая лаборатория 2.0');
    expect(deviceInfoItems.at(6).text()).toContain('МОЛ: Иванов Иван Иванович');
    expect(deviceInfoItems.at(7).text()).toContain('Территория: г.Санкт-Петербург(Нойдорф)');
    expect(deviceInfoItems.at(8).text()).toContain('Серийный номер: B715976163');
    expect(deviceInfoItems.at(9).text()).toContain('GUID: 508b2a71-662e-4983-ae0c-3cb0c1cd21c5');
    expect(deviceInfoItems.at(10).text()).toContain('Bims ID: 49db8db1-585f-4b9e-bbf0-8a59698edc8b');
    expect(deviceInfoItems.at(11).text()).toContain('Tam: А-001234');
  });

  it('updates device information when props change', async () => {
    await wrapper.setProps({
      device: {
        typeOfEquipment: 'New Type',
        workStatus: 'New Status',
        title: 'New Title',
        producer: 'New Producer',
        model: 'New Model',
        responsibleUnit: 'New Responsible Unit',
        operationalUnit: 'New Operational Unit',
        MOL: 'New MOL',
        territory: 'New Territory',
        serialNumber: 'New Serial Number',
        GUID: 'New GUID',
        bimsID: 'New Bims ID',
        tam: 'New Tam',
      }
    });

    const deviceInfoItems = wrapper.findAll('.device-info__item');
    expect(deviceInfoItems.at(0).text()).toContain('Тип оборудования: New Type');
    expect(deviceInfoItems.at(1).text()).toContain('Статус: New Status');
    expect(deviceInfoItems.at(2).text()).toContain('Изготовитель: New Producer');
    expect(deviceInfoItems.at(3).text()).toContain('Модель: New Model');
    expect(deviceInfoItems.at(4).text()).toContain('Ответственное подразделение (ремонт): New Responsible Unit');
    expect(deviceInfoItems.at(5).text()).toContain('Эксплуатационное подразделение: New Operational Unit');
    expect(deviceInfoItems.at(6).text()).toContain('МОЛ: New MOL');
    expect(deviceInfoItems.at(7).text()).toContain('Территория: New Territory');
    expect(deviceInfoItems.at(8).text()).toContain('Серийный номер: New Serial Number');
    expect(deviceInfoItems.at(9).text()).toContain('GUID: New GUID');
    expect(deviceInfoItems.at(10).text()).toContain('Bims ID: New Bims ID');
    expect(deviceInfoItems.at(11).text()).toContain('Tam: New Tam');
  });

  it('copies device property value to clipboard', async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve())
      }
    });

    const guidElement = wrapper.find('.device-info__property-value_is-copied');
    await guidElement.trigger('click');

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('508b2a71-662e-4983-ae0c-3cb0c1cd21c5');
  });
});

