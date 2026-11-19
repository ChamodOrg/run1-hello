# Data model

The product holds no stored records. The only data is the fixed greeting message the page shows.

```mermaid
erDiagram
    Greeting {
        string message "Hello, World!"
    }
```

`Greeting` is a constant in the web app, not a persisted entity.