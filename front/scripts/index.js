const scripts = {
  '/': require('./home'),
  '/pages/new.html': require('./new')
};

scripts[location.pathname]();