# Laravel Nova
## CodeDifference Field

The following field can be used to view differences between two inputs.

### Usage

```php
CodeDifference::make(__("Differences"), function() {
    return ["past" => $this->past, "next" => $this->next];
})->onlyOnDetail()
```

### Dependencies

- Vue Code Diff (vue-code-diff on npm)

Thanks!

### License

This code is public and open-source using MIT License.