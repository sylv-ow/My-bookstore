/* ══════════════════════════════════════════
   ima.books — app.js
   All selectors are null-checked.
   No errors on execution guaranteed.
══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  /* ─────────────────────────────────────────
     NAVBAR — shadow on scroll
  ───────────────────────────────────────── */
  var navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  /* ─────────────────────────────────────────
     MOBILE MENU — open / close
  ───────────────────────────────────────── */
  var hamburger  = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  var closeMenu  = document.getElementById('closeMenu');

  function openMenu() {
    if (mobileMenu) mobileMenu.classList.add('open');
  }
  function closeMenuFn() {
    if (mobileMenu) mobileMenu.classList.remove('open');
  }

  if (hamburger)  hamburger.addEventListener('click', openMenu);
  if (closeMenu)  closeMenu.addEventListener('click', closeMenuFn);

  /* Close menu when any mobile link is tapped */
  var mobLinks = document.querySelectorAll('.mob-link');
  mobLinks.forEach(function (link) {
    link.addEventListener('click', closeMenuFn);
  });

  /* ─────────────────────────────────────────
     BOOK DATABASE
     Add / remove entries freely.
     Fields: title, author, category, available
  ───────────────────────────────────────── */
  var books = [
    /* Dark Academia */
    { title: 'The Secret History',               author: 'Donna Tartt',               category: 'Dark Academia',               available: true  },
    { title: 'If We Were Villains',               author: 'M.L. Rio',                  category: 'Dark Academia',               available: true  },
    { title: 'Ninth House',                       author: 'Leigh Bardugo',             category: 'Dark Academia',               available: true  },
    { title: 'Piranesi',                          author: 'Susanna Clarke',            category: 'Dark Academia',               available: true  },
    { title: 'Babel',                             author: 'R.F. Kuang',                category: 'Dark Academia',               available: true  },
    { title: 'A Deadly Education',                author: 'Naomi Novik',               category: 'Dark Academia',               available: true  },
    { title: 'The Atlas Six',                     author: 'Olivie Blake',              category: 'Dark Academia',               available: true  },
    { title: 'The Invisible Life of Addie LaRue', author: 'V.E. Schwab',              category: 'Dark Academia',               available: true  },
    { title: 'The Starless Sea',                  author: 'Erin Morgenstern',          category: 'Dark Academia',               available: true  },
    { title: 'The Maidens',                       author: 'Alex Michaelides',          category: 'Dark Academia',               available: true  },
    { title: 'In My Dreams I Hold a Knife',       author: 'Ashley Winstead',           category: 'Dark Academia',               available: true  },
    { title: 'The Cloisters',                     author: 'Katy Hays',                 category: 'Dark Academia',               available: false },
    { title: 'A Lesson in Vengeance',             author: 'Victoria Lee',              category: 'Dark Academia',               available: false },
    { title: 'Black Chalk',                       author: 'Christopher J. Yates',      category: 'Dark Academia',               available: false },

    /* Human Behavior */
    { title: 'The Laws of Human Nature',          author: 'Robert Greene',             category: 'Human Behavior',              available: true  },
    { title: 'Thinking, Fast and Slow',           author: 'Daniel Kahneman',           category: 'Human Behavior',              available: true  },
    { title: 'Surrounded by Idiots',              author: 'Thomas Erikson',            category: 'Human Behavior',              available: true  },
    { title: 'Surrounded by Narcissists',         author: 'Thomas Erikson',            category: 'Human Behavior',              available: true  },
    { title: 'Surrounded by Bad Bosses',          author: 'Thomas Erikson',            category: 'Human Behavior',              available: true  },
    { title: 'Surrounded by Setbacks',            author: 'Thomas Erikson',            category: 'Human Behavior',              available: false },
    { title: 'Behave',                            author: 'Robert Sapolsky',           category: 'Human Behavior',              available: true  },
    { title: 'The Power of Habit',                author: 'Charles Duhigg',            category: 'Human Behavior',              available: true  },
    { title: 'Games People Play',                 author: 'Eric Berne',                category: 'Human Behavior',              available: true  },
    { title: '48 Laws of Power',                  author: 'Robert Greene',             category: 'Human Behavior',              available: true  },
    { title: 'What Every Body Is Saying',         author: 'Joe Navarro',               category: 'Human Behavior',              available: true  },
    { title: 'Drive',                             author: 'Daniel H. Pink',            category: 'Human Behavior',              available: true  },
    { title: 'The Art of Thinking Clearly',       author: 'Rolf Dobelli',              category: 'Human Behavior',              available: true  },

    /* High Fantasy */
    { title: 'The Fellowship of the Ring',        author: 'J.R.R. Tolkien',            category: 'High Fantasy',                available: true  },
    { title: 'Mistborn',                          author: 'Brandon Sanderson',         category: 'High Fantasy',                available: true  },
    { title: 'The Name of the Wind',              author: 'Patrick Rothfuss',          category: 'High Fantasy',                available: true  },
    { title: 'A Game of Thrones',                 author: 'George R.R. Martin',        category: 'High Fantasy',                available: true  },
    { title: 'The Fifth Season',                  author: 'N.K. Jemisin',              category: 'High Fantasy',                available: true  },
    { title: "Assassin's Apprentice",             author: 'Robin Hobb',                category: 'High Fantasy',                available: true  },
    { title: 'The Priory of the Orange Tree',     author: 'Samantha Shannon',          category: 'High Fantasy',                available: true  },
    { title: 'The Blade Itself',                  author: 'Joe Abercrombie',           category: 'High Fantasy',                available: true  },
    { title: 'The Way of Kings',                  author: 'Brandon Sanderson',         category: 'High Fantasy',                available: true  },
    { title: 'The Shadow of the Gods',            author: 'John Gwynne',               category: 'High Fantasy',                available: true  },
    { title: 'The Poppy War',                     author: 'R.F. Kuang',                category: 'High Fantasy',                available: true  },
    { title: 'The Eye of the World',              author: 'Robert Jordan',             category: 'High Fantasy',                available: true  },
    { title: 'Prince of Thorns',                  author: 'Mark Lawrence',             category: 'High Fantasy',                available: false },
    { title: 'Gardens of the Moon',               author: 'Steven Erikson',            category: 'High Fantasy',                available: false },

    /* Greek Mythology */
    { title: 'The Song of Achilles',              author: 'Madeline Miller',           category: 'Greek Mythology Retellings',  available: true  },
    { title: 'Circe',                             author: 'Madeline Miller',           category: 'Greek Mythology Retellings',  available: true  },
    { title: 'Ariadne',                           author: 'Jennifer Saint',            category: 'Greek Mythology Retellings',  available: true  },
    { title: 'Stone Blind',                       author: 'Natalie Haynes',            category: 'Greek Mythology Retellings',  available: true  },
    { title: 'The Silence of the Girls',          author: 'Pat Barker',                category: 'Greek Mythology Retellings',  available: true  },
    { title: 'Elektra',                           author: 'Jennifer Saint',            category: 'Greek Mythology Retellings',  available: true  },
    { title: 'Pandora',                           author: 'Susan Stokes-Chapman',      category: 'Greek Mythology Retellings',  available: true  },
    { title: 'Daughters of Sparta',               author: 'Claire Heywood',            category: 'Greek Mythology Retellings',  available: true  },
    { title: 'Clytemnestra',                      author: 'Costanza Casati',           category: 'Greek Mythology Retellings',  available: true  },
    { title: 'Ithaca',                            author: 'Claire North',              category: 'Greek Mythology Retellings',  available: true  },
    { title: 'A Thousand Ships',                  author: 'Natalie Haynes',            category: 'Greek Mythology Retellings',  available: true  },
    { title: 'The Wolf Den',                      author: 'Elodie Harper',             category: 'Greek Mythology Retellings',  available: true  },
    { title: 'Hera',                              author: 'Jennifer Saint',            category: 'Greek Mythology Retellings',  available: false },
    { title: 'Atalanta',                          author: 'Jennifer Saint',            category: 'Greek Mythology Retellings',  available: false },

    /* Dark Psychology */
    { title: 'Influence',                         author: 'Robert B. Cialdini',        category: 'Dark Psychology & Influence', available: true  },
    { title: 'The Tipping Point',                 author: 'Malcolm Gladwell',          category: 'Dark Psychology & Influence', available: true  },
    { title: 'Manufacturing Consent',             author: 'Noam Chomsky',              category: 'Dark Psychology & Influence', available: true  },
    { title: 'Man and His Symbols',               author: 'Carl G. Jung',              category: 'Dark Psychology & Influence', available: true  },
    { title: 'Propaganda',                        author: 'Jacques Ellul',             category: 'Dark Psychology & Influence', available: true  },
    { title: "Trust Me, I'm Lying",               author: 'Ryan Holiday',              category: 'Dark Psychology & Influence', available: true  },
    { title: 'Brainwashing',                      author: 'Kathleen Taylor',           category: 'Dark Psychology & Influence', available: false },

    /* Classic Fiction */
    { title: 'Emma',                              author: 'Jane Austen',               category: 'Classic Fiction',             available: true  },
    { title: 'Frankenstein',                      author: 'Mary Shelley',              category: 'Classic Fiction',             available: true  },
    { title: 'The Picture of Dorian Gray',        author: 'Oscar Wilde',               category: 'Classic Fiction',             available: true  },
    { title: 'Sense and Sensibility',             author: 'Jane Austen',               category: 'Classic Fiction',             available: true  },
    { title: 'Northanger Abbey',                  author: 'Jane Austen',               category: 'Classic Fiction',             available: true  },
    { title: 'Mansfield Park',                    author: 'Jane Austen',               category: 'Classic Fiction',             available: true  },
    { title: 'Mrs Dalloway',                      author: 'Virginia Woolf',            category: 'Classic Fiction',             available: true  },
    { title: 'To the Lighthouse',                 author: 'Virginia Woolf',            category: 'Classic Fiction',             available: true  },
    { title: 'Orlando',                           author: 'Virginia Woolf',            category: 'Classic Fiction',             available: true  },
    { title: 'A Room of One\'s Own',              author: 'Virginia Woolf',            category: 'Classic Fiction',             available: true  },

    /* Camus */
    { title: 'The Stranger',                      author: 'Albert Camus',              category: 'Camus',                       available: true  },
    { title: 'The Plague',                        author: 'Albert Camus',              category: 'Camus',                       available: true  },
    { title: 'The Fall',                          author: 'Albert Camus',              category: 'Camus',                       available: true  },
    { title: 'The Myth of Sisyphus',              author: 'Albert Camus',              category: 'Camus',                       available: true  },
    { title: 'The Outsider',                      author: 'Albert Camus',              category: 'Camus',                       available: true  },

    /* Dostoyevsky */
    { title: 'Crime and Punishment',              author: 'Fyodor Dostoyevsky',        category: 'Dostoyevsky',                 available: true  },
    { title: 'The Brothers Karamazov',            author: 'Fyodor Dostoyevsky',        category: 'Dostoyevsky',                 available: true  },
    { title: 'The Idiot',                         author: 'Fyodor Dostoyevsky',        category: 'Dostoyevsky',                 available: true  },
    { title: 'Notes from Underground',            author: 'Fyodor Dostoyevsky',        category: 'Dostoyevsky',                 available: true  },
    { title: 'The Gambler',                       author: 'Fyodor Dostoyevsky',        category: 'Dostoyevsky',                 available: true  },
    { title: 'Demons',                            author: 'Fyodor Dostoyevsky',        category: 'Dostoyevsky',                 available: true  },

    /* Tolstoy */
    { title: 'War and Peace',                     author: 'Leo Tolstoy',               category: 'Tolstoy',                     available: true  },
    { title: 'Anna Karenina',                     author: 'Leo Tolstoy',               category: 'Tolstoy',                     available: true  },
    { title: 'The Death of Ivan Ilyich',          author: 'Leo Tolstoy',               category: 'Tolstoy',                     available: true  },

    /* Murakami */
    { title: 'Norwegian Wood',                    author: 'Haruki Murakami',           category: 'Murakami',                    available: true  },
    { title: 'Kafka on the Shore',                author: 'Haruki Murakami',           category: 'Murakami',                    available: true  },
    { title: '1Q84',                              author: 'Haruki Murakami',           category: 'Murakami',                    available: true  },
    { title: 'The Wind-Up Bird Chronicle',        author: 'Haruki Murakami',           category: 'Murakami',                    available: true  },
    { title: 'After Dark',                        author: 'Haruki Murakami',           category: 'Murakami',                    available: true  },

    /* Kafka */
    { title: 'The Metamorphosis',                 author: 'Franz Kafka',               category: 'Kafka',                       available: true  },
    { title: 'The Trial',                         author: 'Franz Kafka',               category: 'Kafka',                       available: true  },
    { title: 'The Castle',                        author: 'Franz Kafka',               category: 'Kafka',                       available: true  },
    { title: 'In the Penal Colony',               author: 'Franz Kafka',               category: 'Kafka',                       available: true  },

    /* Colleen Hoover */
    { title: 'It Ends with Us',                   author: 'Colleen Hoover',            category: 'Colleen Hoover',              available: true  },
    { title: 'Verity',                            author: 'Colleen Hoover',            category: 'Colleen Hoover',              available: true  },
    { title: 'Ugly Love',                         author: 'Colleen Hoover',            category: 'Colleen Hoover',              available: true  },
    { title: 'November 9',                        author: 'Colleen Hoover',            category: 'Colleen Hoover',              available: true  },
    { title: 'Reminders of Him',                  author: 'Colleen Hoover',            category: 'Colleen Hoover',              available: true  },
    { title: 'Confess',                           author: 'Colleen Hoover',            category: 'Colleen Hoover',              available: false },

    /* Nietzsche */
    { title: 'Thus Spoke Zarathustra',            author: 'Friedrich Nietzsche',       category: 'Philosophy',                  available: true  },
    { title: 'Beyond Good and Evil',              author: 'Friedrich Nietzsche',       category: 'Philosophy',                  available: true  },
    { title: 'The Birth of Tragedy',              author: 'Friedrich Nietzsche',       category: 'Philosophy',                  available: true  },
    { title: 'On the Genealogy of Morality',      author: 'Friedrich Nietzsche',       category: 'Philosophy',                  available: true  },

    /* García Márquez */
    { title: 'One Hundred Years of Solitude',     author: 'Gabriel García Márquez',    category: 'Magical Realism',             available: true  },
    { title: 'Love in the Time of Cholera',       author: 'Gabriel García Márquez',    category: 'Magical Realism',             available: true  },
    { title: 'Chronicle of a Death Foretold',     author: 'Gabriel García Márquez',    category: 'Magical Realism',             available: true  }
  ];

  /* ─────────────────────────────────────────
     SEARCH LOGIC
  ───────────────────────────────────────── */
  function normalize(str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, '')
      .trim();
  }

  function doSearch() {
    var input = document.getElementById('searchInput');
    var result = document.getElementById('searchResult');
    if (!input || !result) return;

    var query = normalize(input.value);

    if (!query) {
      result.textContent = 'Please enter a title or author name.';
      result.className = 'search-result show';
      return;
    }

    var matches = books.filter(function (b) {
      return normalize(b.title).indexOf(query) !== -1 ||
             normalize(b.author).indexOf(query) !== -1;
    });

    result.className = 'search-result show';

    if (matches.length === 0) {
      result.className = 'search-result show not-found';
      result.innerHTML =
        '&#10060; &nbsp;Sorry — <strong>"' + input.value + '"</strong> ' +
        'isn\'t in our catalogue. Contact us and we may be able to order it!';
      return;
    }

    var avail   = matches.filter(function (b) { return  b.available; });
    var unavail = matches.filter(function (b) { return !b.available; });
    var html = '';

    if (avail.length) {
      result.className = 'search-result show found';
      html += '&#9989; &nbsp;<strong>' + avail.length + ' title' +
              (avail.length > 1 ? 's' : '') + ' available in store:</strong><br/><br/>';
      html += avail.map(function (b) {
        return '<span style="display:inline-block;margin:.25rem .35rem 0 0;' +
          'padding:.22rem .75rem;background:rgba(111,207,151,.12);' +
          'border:1px solid rgba(111,207,151,.28);border-radius:2rem;font-size:.8rem">' +
          '<strong>' + b.title + '</strong>' +
          '<span style="opacity:.65"> — ' + b.author + '</span></span>';
      }).join('');
    }

    if (unavail.length) {
      html += '<br/><br/>&#128230; &nbsp;<strong>' + unavail.length + ' title' +
              (unavail.length > 1 ? 's' : '') + ' currently out of stock</strong> — ask us about ordering:<br/><br/>';
      html += unavail.map(function (b) {
        return '<span style="display:inline-block;margin:.25rem .35rem 0 0;' +
          'padding:.22rem .75rem;background:rgba(235,87,87,.1);' +
          'border:1px solid rgba(235,87,87,.22);border-radius:2rem;font-size:.8rem">' +
          '<strong>' + b.title + '</strong>' +
          '<span style="opacity:.65"> — ' + b.author + '</span></span>';
      }).join('');
    }

    result.innerHTML = html;
  }

  var searchBtn   = document.getElementById('searchBtn');
  var searchInput = document.getElementById('searchInput');

  if (searchBtn)   searchBtn.addEventListener('click', doSearch);
  if (searchInput) searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') doSearch();
  });

  /* ─────────────────────────────────────────
     FADE-UP ON SCROLL
  ───────────────────────────────────────── */
  var fadeEls = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    /* Fallback for browsers without IntersectionObserver */
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ─────────────────────────────────────────
     ADD TO CART — visual feedback
  ───────────────────────────────────────── */
  var cartBtns = document.querySelectorAll('.add-cart');
  cartBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var self = this;
      var orig = self.textContent;
      self.textContent = 'Added ✓';
      self.style.background = '#6fcf97';
      self.style.color = '#0d0b08';
      setTimeout(function () {
        self.textContent = orig;
        self.style.background = '';
        self.style.color = '';
      }, 1800);
    });
  });

}); /* end DOMContentLoaded */
