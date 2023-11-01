import MoveCar from '../src/MoveCar';
import RaceResult from '../src/RaceResult';

describe('자동차 이동 검증 테스트', () => {
  test('무작위 값이 4 이상인 경우 자동차 이동', () => {
    const moveCar = new MoveCar(new Map());
    const cars = 'pobi';

    moveCar.moveCar(cars);
    expect(moveCar.forward.get(cars)).toMatch(/^-+$/);
  });

  test('무작위 값이 4 미만인 경우 자동차 정지', () => {
    const moveCar = new MoveCar(new Map());
    const cars = 'woni';
    moveCar.stopCar(cars);

    expect(moveCar.forward.get(cars)).toBe('');
  });
});

describe('차수별 실행 결과 검증 테스트', () => {
  test('getRaceResult 메서드로 차수에 맞는 실행 결과 출력', () => {
    const raceResult = new RaceResult();
    const cars = ['pobi', 'woni', 'jun'];
    const input = 5;

    raceResult.getRaceResult(cars, input);
  });
});