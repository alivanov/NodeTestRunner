import { MyClass } from '../../src/classes/AltitudeSensor';
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('AltitudeSensor', () => {
  it('should call public method', () => {
    const myClass = new MyClass();
    assert.strictEqual(myClass.publicMethod(), "Public method");
  });

  it('should call protected method via public method', () => {
    const myClass = new MyClass();
    assert.strictEqual(myClass.callProtectedMethod(), "Protected method");
  });

  it('should call private method via public method', () => {
    const myClass = new MyClass();
    assert.strictEqual(myClass.callPrivateMethod(), "Private method");
  });
});