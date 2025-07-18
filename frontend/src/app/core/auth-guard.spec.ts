import { TestBed } from '@angular/core/testing';
import {
  CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthGuard } from './auth-guard';
import { AuthService } from '../shared/services/auth.service';
import { RouteNames } from '../shared/interfaces/routes';
import { provideZonelessChangeDetection } from '@angular/core';

describe('AuthGuard', () => {
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;
  let mockRoute: ActivatedRouteSnapshot;
  let mockState: RouterStateSnapshot;

  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => AuthGuard(...guardParameters));

  beforeEach(() => {
    const authServiceMock = {
      isAuthenticated: jasmine.createSpy('isAuthenticated'),
    };

    const routerMock = {
      createUrlTree: jasmine
        .createSpy('createUrlTree')
        .and.returnValue({} as UrlTree),
    };

    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    });

    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    mockRoute = {} as ActivatedRouteSnapshot;
    mockState = { url: '/protected-route' } as RouterStateSnapshot;
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should return true when user is authenticated', () => {
    authService.isAuthenticated.and.returnValue(true);

    const result = executeGuard(mockRoute, mockState);

    expect(result).toBeTrue();
    expect(authService.isAuthenticated).toHaveBeenCalledTimes(1);
    expect(router.createUrlTree).not.toHaveBeenCalled();
  });

  it('should redirect to login when user is not authenticated', () => {
    const mockUrlTree = {} as UrlTree;
    authService.isAuthenticated.and.returnValue(false);
    router.createUrlTree.and.returnValue(mockUrlTree);

    const result = executeGuard(mockRoute, mockState);

    expect(result).toBe(mockUrlTree);
    expect(authService.isAuthenticated).toHaveBeenCalledTimes(1);
    expect(router.createUrlTree).toHaveBeenCalledWith([RouteNames.LOGIN], {
      queryParams: { returnUrl: mockState.url },
    });
  });
});
