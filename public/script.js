function Gallery(selector) {

    this.object = $(selector);
    this.options = {
        'transition': 'fade'
    };

    var that = this;

    this.init = function () {
        that.object
            .removeClass('current')
            .css('z-index', 1)
            .eq(0)
                .css('z-index', 99)
                .addClass('current');
    };

    this.next = function () {
        return that.transition('next');
    };

    this.previous = function () {
        return that.transition('prev');
    };

    this.transition = function (direction) {
        var from = that.object.filter('.current');
        var to = from[direction]();

        if (!to.length) {
            var index = {'next': 0, 'prev': -1}[direction];
            if (index === undefined) {
                return false;
            }
            to = that.object.eq(index);
            if (!to.length) {
                return false;
            }
        }

        if (that.options.transition === 'none') {
            to.css('z-index', 99);
            from.css('z-index', 1);
        } else if (that.options.transition === 'fade') {
            to.css('z-index', 98);
            from.animate({'opacity': 0}, function () {
                $(this).css({'z-index': 1, 'opacity': 1});
                to.css('z-index', 99);
            });
        }

        to.addClass('current');
        from.removeClass('current');
    };

    this.init();
}
