function SearchFilter () {}
var searchIcon = '<svg class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1137" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="15"><defs><style type="text/css"><![CDATA[' +

']]></style></defs><path d="M999.104 878.336l-244.992-245.056c-2.816-2.88-6.016-4.992-9.024-7.36 41.408-63.552 65.536-139.2 65.536-220.672 0-223.872-181.44-405.376-405.312-405.376C181.504-0.064 0 181.44 0 405.312s181.568 405.312 405.312 405.312c81.472 0 157.184-24.192 220.8-65.6 2.304 3.008 4.48 6.08 7.232 8.96l245.056 245.12c16.704 16.64 38.528 24.96 60.352 24.96 21.824 0 43.648-8.32 60.352-24.96C1032.32 965.76 1032.32 911.68 999.104 878.336M405.312 682.624C252.416 682.624 128 558.208 128 405.312s124.48-277.376 277.312-277.376c152.896 0 277.312 124.48 277.312 277.376S558.208 682.624 405.312 682.624" p-id="1138"></path></svg>'
SearchFilter.prototype.init = function (params) {
    this.valueGetter = params.valueGetter;
    this.filterText = null;
    this.setupGui(params);
};

// not called by ag-Grid, just for us to help setup
SearchFilter.prototype.setupGui = function (params) {
    this.gui = document.createElement('div');
    this.gui.innerHTML =
        '<div style="width: auto;">' +
          '<div style="background-color:#e0e1e2;padding-left:8px;font-size:12px;line-height:20px;' +
          'border-bottom:1px solid #A9A9A9">查询</div>' +
          '<div style="margin:15px 8px;white-space:nowrap">' +
            '<input class="ag-grid-filter-input" type="text" id="filterText" placeholder="搜索..."/>' +
            '<button class="ag-grid-filter-btn" id="filterTextSubmit" style="vertical-align: bottom">' +
              searchIcon +
            '</button>' +
          '<div>' +
        '</div>'

    this.eFilterText = this.gui.querySelector('#filterText');
    this.eFilterBtn = this.gui.querySelector('#filterTextSubmit')
    this.eFilterBtn.addEventListener('click', listener)
    // this.eFilterText.addEventListener("changed", listener);
    // this.eFilterText.addEventListener("paste", listener);
    // this.eFilterText.addEventListener("input", listener);
    // IE doesn't fire changed for special keys (eg delete, backspace), so need to
    // listen for this further ones
    // this.eFilterText.addEventListener("keydown", listener);
    // this.eFilterText.addEventListener("keyup", listener);

    var that = this;
    function listener(event) {
        // console.log(that.filterText)
        // that.filterText = event.target.value;
        that.filterText = that.gui.querySelector('#filterText').value;
        params.filterChangedCallback();
    }
};

SearchFilter.prototype.getGui = function () {
    return this.gui;
};

SearchFilter.prototype.doesFilterPass = function (params) {
    // make sure each word passes separately, ie search for firstname, lastname
    var passed = true;
    var valueGetter = this.valueGetter;
    this.filterText.toLowerCase().split(" ").forEach(function(filterWord) {
        var value = valueGetter(params);
        if (value.toString().toLowerCase().indexOf(filterWord)<0) {
            passed = false;
        }
    });

    return passed;
};

SearchFilter.prototype.isFilterActive = function () {
    return this.filterText !== null && this.filterText !== undefined && this.filterText !== '';
};

SearchFilter.prototype.getModel = function() {
    var model = {value: this.filterText.value};
    return model;
};

SearchFilter.prototype.setModel = function(model) {
    // this.eFilterText.value = model.value;
};


export default SearchFilter
