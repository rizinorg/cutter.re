# Cutter Website

### How to build

1. Install `ruby` following [official guide](https://www.ruby-lang.org/en/documentation/installation/).
2. Install essential build tools (`build-essential` for linux & `Xcode cmdline tools` for macOS).
3. Clone this repo:

    `git clone --filter=blob:none https://github.com/rizinorg/cutter.re`
4. Run the following:
    ```sh
    cd cutter.re
    gem install bundler
    bundle install
    bundle exec jekyll serve
    ```
If all goes right, you should be able to access the site at http://127.0.0.1:4000/

> [!NOTE]
> [Cutter documentation](https://cutter.re/docs/) source resides in [cutter repo](https://github.com/rizinorg/cutter/tree/dev/docs) and can be built using [these instructions](https://cutter.re/docs/contributing/docs/building-docs.html) separately.
