import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * 인증 상태 Zustand Store
 *
 * persist 미들웨어로 localStorage에 자동 저장됩니다.
 * 실제 OAuth2 API 연결 시 login() 함수 내부만 교체하세요.
 */
const useAuthStore = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,

      // TODO: 실제 OAuth2 흐름으로 교체
      login: (provider) => {
        set({
          isAuthenticated: true,
          user: {
            name: '사용자',
            email: 'user@example.com',
            provider,
          },
        });
      },

      logout: () => {
        set({ isAuthenticated: false, user: null });
      },
    }),
    {
      name: 'auth-storage', // localStorage key
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        user: state.user,
      }),
    }
  )
);

export default useAuthStore;
