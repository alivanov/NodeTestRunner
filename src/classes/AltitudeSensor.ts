export class MyClass {
    private privateMethod(): string {
      return "Private method";
    }
  
    protected protectedMethod(): string {
      return "Protected method";
    }
  
    public publicMethod(): string {
      return "Public method";
    }
  
    public callProtectedMethod(): string {
      return this.protectedMethod();
    }

    public callPrivateMethod(): string {
        return this.privateMethod();
      }
  }